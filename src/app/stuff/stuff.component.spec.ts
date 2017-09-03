
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NguiAutoCompleteModule } from '@ngui/auto-complete';
import { StuffComponent } from './stuff.component';
import { Person, PeopleService } from '../people.service';
import { Observable } from 'rxjs/Rx';

class PeopleServiceMock extends PeopleService {
  public get people (): Person[] {
    return [
      new Person('john', 'john@ex.com'),
      new Person('jane', 'jane@ex.com'),
      new Person('obi', 'obi@ex.com'),
      new Person('test', 'test@ex.com')
    ];
  }
}

describe('StuffComponent', () => {
  let component: StuffComponent;
  let fixture: ComponentFixture<StuffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, NguiAutoCompleteModule],
      declarations: [StuffComponent],
      providers: [PeopleService]
    })
    .overrideComponent(StuffComponent, {
      set: {
        providers: [{
          provide: PeopleService, useClass: PeopleServiceMock
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

  it('should populate suggestions when calling \'names\'', (done) => {
    component.names('j').subscribe(results => {
      expect(results).toEqual(['john', 'jane']);
      done();
    });
  });
});
