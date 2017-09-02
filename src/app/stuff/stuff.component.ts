import { Component, OnInit } from '@angular/core';
import { Person, PeopleService} from '../people.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-stuff',
  templateUrl: './stuff.component.html',
  styleUrls: ['./stuff.component.css']
})
export class StuffComponent implements OnInit {

  public people: Observable<Person[]>;

  constructor(private peopleService: PeopleService) {}

  public names = (keyword: any): Observable<string[]> => {

    const re = RegExp("^"+keyword,'i');

    return this.peopleService.state.map((people)=> {
      return people.map(p => p.name).filter(name => re.test(name))
    });
  }

  ngOnInit() {

    this.people = this.peopleService.state;
  }
}
