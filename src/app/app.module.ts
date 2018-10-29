import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SyllabusComponent } from './syllabus/syllabus.component';
import { SyllabusInfoComponent } from './syllabus-info/syllabus-info.component';

@NgModule({
  declarations: [
    AppComponent,
    SyllabusComponent,
    SyllabusInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
