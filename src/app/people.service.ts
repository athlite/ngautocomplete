import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import Faker from 'faker';

interface IPerson {
  name: string;
  email: string;
}

export class Person implements IPerson {
  public name: string;
  public email: string;
  constructor () {
    this.name = Faker.name.findName();
    this.email = Faker.internet.email();
  }
}

const people = Array(20).fill(0).map( i => {
  return new Person();
});

@Injectable()
export class PeopleService {

  constructor() {}

  public get state (): Observable<Person[]> {
    return Observable.of(people);
  }
}
