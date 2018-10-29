import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../course';

@Component({
  selector: 'app-syllabus-info',
  templateUrl: './syllabus-info.component.html',
  styleUrls: ['./syllabus-info.component.css']
})
export class SyllabusInfoComponent implements OnInit {

  @Input() course: Course;

  constructor() { }

  ngOnInit() {
  }

}
