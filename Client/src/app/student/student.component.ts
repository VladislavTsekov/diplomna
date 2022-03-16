import { Component, OnInit } from '@angular/core';
import {StudentService} from "./student.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  //@ts-ignore
  dataSource;

  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit(): void {
    this.studentService.getAllStudents().subscribe(data => {this.dataSource=data});
  }


  backToMainView(){
    this.router.navigate([
      ""
    ])
  }

}
