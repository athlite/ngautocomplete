import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import Faker from 'faker';

interface IPerson {
  name: string;
  email: string;
}

console.log(Faker);

export class Person implements IPerson {
  public name: string;
  public email: string;
  constructor (name,email) {
    this.name = name;
    this.email = email;
  }
}

const people = Array(20).fill(0).map( i => {
  return new Person(Faker.name.findName(),Faker.internet.email());
});

@Injectable()
export class PeopleService {

  constructor() {}

  public get state (): Observable<Person[]> {
    return Observable.of(people);
  }
}
