import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NguiAutoCompleteModule } from '@ngui/auto-complete';

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
    NguiAutoCompleteModule
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
