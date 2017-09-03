import { TestBed, inject } from '@angular/core/testing';

import { PeopleService } from './people.service';

describe('PeopleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PeopleService]
    });
  });

  it('should be created', inject([PeopleService], (service: PeopleService) => {
    expect(service).toBeTruthy();
  }));

  it ('should get people', inject([PeopleService], (service: PeopleService) => {
    expect(service.people.length).toEqual(1000);
  }));
});
