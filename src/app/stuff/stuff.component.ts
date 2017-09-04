import { Component, OnInit } from '@angular/core';
import { Person, PeopleService} from '../people.service';
import { Observable, Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-stuff',
  templateUrl: './stuff.component.html',
  styleUrls: ['./stuff.component.css']
})
export class StuffComponent implements OnInit {

  public people: Person[];
  public term: string;
  public activeSearchTerm: string;
  public searching = false;

  constructor(private service: PeopleService) {}

  public search = (text$: Observable<string>): Observable<string[]> => {
    return text$
    .debounceTime(200)
    .distinctUntilChanged()
    .do(_ => this.searching = true)
    .switchMap(term =>
      this.service.search(term).map(people =>
        people.map(p => p.name)
      )
    )
    .do(_ => this.searching = false)
  };

  public exec (): void {
    this.activeSearchTerm = `Søk etter ${this.term}`;
  }

  ngOnInit() {

    this.service.state.subscribe(people => {
      this.people = people;
    });
  }
}
