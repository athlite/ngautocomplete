import { Injectable } from '@angular/core';
import Faker from 'faker';

class Person {
  public value: object;
  constructor () {
    this.value = Faker.helpers.userCard()
  }
}

@Injectable()
export class PeopleService {

  constructor() {}

  public all (): Promise<Array<Person>> {
    const people = Array(20).fill(0).map( i => {
      return new Person();
    });
    return Promise.resolve(people);
  }
}
