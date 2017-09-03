import { Component, OnInit } from '@angular/core';
import { Person, PeopleService} from '../people.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-stuff',
  templateUrl: './stuff.component.html',
  styleUrls: ['./stuff.component.css']
})
export class StuffComponent implements OnInit {

  public _selectedPerson: string;
  public people: Observable<Person[]>;

  constructor(private peopleService: PeopleService) {}

  public names = (keyword: string): Observable<string[]> => {

    const re = RegExp("^"+keyword,'i');

    return this.people.map(people =>
      people.map(p => p.name).filter(name => re.test(name))
    );
  }

  public set selectedPerson(s: string) {
    console.log('selected',s);
    this._selectedPerson = s;
  }

  public get selectedPerson(): string {
    return this._selectedPerson;
  }

  ngOnInit() {
    this.people = this.peopleService.state;
    this.selectedPerson
  }
}
