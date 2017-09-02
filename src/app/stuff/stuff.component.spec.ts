import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StuffComponent } from './stuff.component';
import { Person, PeopleService} from '../people.service';
import { Faker } from 'faker';

describe('StuffComponent', () => {
  let component: StuffComponent;
  let fixture: ComponentFixture<StuffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [Faker],
      declarations: [ StuffComponent],
      providers: [PeopleService]
    })
    .overrideComponent(StuffComponent, {
      set: {
        providers: [{
          provide: Faker, useValue: {
            name: Faker.name,
            internet: Faker.internet
          }
        }]
      }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
