import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { COURSES } from '../staticdata';

@Component({
  selector: 'app-syllabus',
  templateUrl: './syllabus.component.html',
  styleUrls: ['./syllabus.component.css']
})
export class SyllabusComponent implements OnInit {

  selectedCourse: Course;
  courses = COURSES;

  onSelect(course: Course) {
    this.selectedCourse = course;
  }

  constructor() { }

  ngOnInit() {
  }

}
