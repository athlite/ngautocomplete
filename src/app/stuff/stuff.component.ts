import { Component, OnInit } from '@angular/core';
import {PeopleService} from '../people.service';

@Component({
  selector: 'app-stuff',
  templateUrl: './stuff.component.html',
  styleUrls: ['./stuff.component.css']
})
export class StuffComponent implements OnInit {

  public people = [];

  constructor(private peopleService: PeopleService) {}

  get peopleSource (): Array<string> {
    return this.people.map(p => p.name);
  }

  ngOnInit() {
    this.peopleService.all().then(people =>
      this.people = people.map(person => person.value)
    );
  }
}
