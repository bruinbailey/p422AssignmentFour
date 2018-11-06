import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SyllabusComponent } from './syllabus/syllabus.component';
import { SyllabusInfoComponent } from './syllabus-info/syllabus-info.component';
import { CalendarComponent } from './calendar/calendar.component';
import { UniversityInfoComponent } from './university-info/university-info.component';

@NgModule({
  declarations: [
    AppComponent,
    SyllabusComponent,
    SyllabusInfoComponent,
    CalendarComponent,
    UniversityInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
