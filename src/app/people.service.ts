import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import * as faker from 'faker';

interface IPerson {
  name: string;
  email: string;
}

export class Person implements IPerson {
  public name: string;
  public email: string;
  constructor (name,email) {
    this.name = name;
    this.email = email;
  }
}

@Injectable()
export class PeopleService {

  private _people: Person[];

  public get people (): Person[] {
    if (this._people) { return this._people; }
    this._people = Array(1000).fill(0).map( i => {
      return new Person(faker.name.findName(),faker.internet.email());
    });
    return this._people;
  }

  public get state (): Observable<Person[]> {
    return Observable.of(this.people);
  }
}
