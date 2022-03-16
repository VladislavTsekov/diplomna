import { Component, OnInit } from '@angular/core';
import { TeacherService } from './teacher.service';
import {Router} from "@angular/router";
import {Teacher} from "../commonModels/Teacher";
import {ConfirmationService, MessageService} from "primeng/api";


@Component({
  templateUrl: `./teacher.component.html`,
  styleUrls: [`./teacher.component.css`],
  selector: 'app-role'
})

export class TeacherComponent implements OnInit {

  //@ts-ignore
  dataSource;
  //@ts-ignore
  teacher: Teacher = {} as Teacher;
  //@ts-ignore
  teacherSaveDialog: boolean;


  constructor(private teacherService: TeacherService, private router: Router,
              private confirmationService: ConfirmationService,
              private messageService: MessageService) { }

  ngOnInit(): void {
    this.refreshGrid();
  }


  backToMainView(){
    this.router.navigate([
      ""
    ])
  }

  refreshGrid(){
    this.teacherService.getAllTeachers().subscribe(data => {this.dataSource = data});
  }

  async delete(teacher: Teacher){
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + teacher.firstName + ' ' + teacher.lastName + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: ()=>{
        this.deleteTeacher(teacher);
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'Line Deleted', life: 3000});
      }});
  }

  async deleteTeacher(teacher: Teacher){
    await this.teacherService.deleteTeacher(teacher.id);
    await this.refreshGrid();
  }

  editTeacher(teacher: Teacher) {
    this.teacher = {...teacher};
    this.teacherSaveDialog = true;
  }

  async save(){

    await this.teacherService.saveTeacher(this.teacher);

    this.dataSource = [...this.dataSource];
    this.teacherSaveDialog = false;
    //@ts-ignore
    this.teacher = {};

    this.refreshGrid();
  }

  hideDialog() {
    this.teacherSaveDialog = false;
  }

  openNew() {
    //@ts-ignore
    this.teacher.id = 0;
    this.teacherSaveDialog = true;
  }
}
