import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NguiAutoCompleteModule } from '@ngui/auto-complete';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { StuffComponent } from './stuff/stuff.component';
import { PeopleService } from './people.service';

@NgModule({
  declarations: [
    AppComponent,
    StuffComponent
  ],
  imports: [
    BrowserModule,
    NguiAutoCompleteModule,
    NgbModule.forRoot(),
    FormsModule
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
