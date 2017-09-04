import { Component, OnInit } from '@angular/core';
import { Person, PeopleService} from '../people.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-stuff',
  templateUrl: './stuff.component.html',
  styleUrls: ['./stuff.component.css']
})
export class StuffComponent implements OnInit {

  public people: Person[];
  public term: string;
  public activeSearchTerm: string;

  constructor(private peopleService: PeopleService) {}

  public search = (text$: Observable<string>): Observable<string[]> => {
    return text$.debounceTime(200).distinctUntilChanged().map(term => {
      if (term.length < 2) return [];
      return this.people.map(p=>p.name).filter(name => {
        return RegExp('^' + term, 'i').test(name);
      });
    });
  };

  blur () {
    this.activeSearchTerm = this.term;
  }

  ngOnInit() {
    this.peopleService.state.subscribe(people => {
      this.people = people;
    });
  }
}
