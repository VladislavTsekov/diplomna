import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {TeacherComponent} from "../../teacher/teacher.component";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private router: Router) {

  }

  showTeacher(){
    this.router.navigate([
      "/teacher"
    ])
  }

  showStudent(){
    this.router.navigate([
      "/student"
    ])
  }

  ngOnInit(): void {
  }

}
