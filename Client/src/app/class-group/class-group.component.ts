import { Component, OnInit } from '@angular/core';
import {ClassGroupService} from "./class-group.service";
import {ClassGroup} from "../commonModels/ClassGroup";
import {Router} from "@angular/router";
import {ConfirmationService, MessageService} from "primeng/api";
import {TeacherService} from "../teacher/teacher.service";


interface Option {
  name: string;
  id: number;
}


@Component({
  selector: 'app-class-group',
  templateUrl: './class-group.component.html',
  styleUrls: ['./class-group.component.css'],
  styles: [
    `
    :host ::ng-deep .p-dialog {
      width: 150px;
      margin: 0 auto 2rem auto;
      display: block;
    }
    `
  ],
})

export class ClassGroupComponent implements OnInit {

  //@ts-ignore
  dataSource;
  //@ts-ignore
  classGroup: ClassGroup = {} as ClassGroup;
  //@ts-ignore
  classGroupSaveDialog: boolean;
  teacherOptions: Option[] = [];


  // currentClassGroupId : number; //for @Input in student.ts !!!

  constructor(private classGroupService: ClassGroupService,
              private router: Router,
              private confirmationService: ConfirmationService,
              private messageService: MessageService,
              private teacherService: TeacherService) { }

  ngOnInit(): void {
    this.refreshGrid();

    let defaultOption = {name: '', id: -1};
    this.teacherService.getAllTeachers().subscribe((data) => { //dropdown for teachers
      this.teacherOptions = data.map(({firstName, lastName, id}) => { // arguments from backend for visualisation
        return {name: firstName+" "+lastName, id} // order and logic for visualisation
      })
      this.teacherOptions.unshift(defaultOption);
    })
  }

  refreshGrid(){
    this.classGroupService.getAllClassGroups().subscribe(data => {this.dataSource=data});
  }

  backToMainView(){
    this.router.navigate([
      ""
    ])
  }

  forwardToStudents(classGroup: ClassGroup){
    this.router.navigate([
      "/student"
    ])
  }

  async delete(classGroup: ClassGroup){
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + classGroup.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: ()=>{
        this.deleteClassGroup(classGroup);
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'Line Deleted', life: 3000});
      }
    });
  }

  async deleteClassGroup(classGroup: ClassGroup){
    await this.classGroupService.deleteClassGroup(classGroup.id);
    await this.refreshGrid();
  }

  editClassGroup(classGroup: ClassGroup){
    this.classGroup = {...classGroup};
    this.classGroupSaveDialog = true;
  }

  async save(){
    await this.classGroupService.saveClassGroup(this.classGroup);

    this.dataSource = [...this.dataSource]
    this.classGroupSaveDialog = false;
    //@ts-ignore
    this.classGroup = {teacher: {}} as ClassGroup;

    this.refreshGrid();
  }

  hideDialog(){
    this.classGroupSaveDialog = false;
  }

  openNew(){
    //@ts-ignore
    this.classGroup= {teacher: {id:null}};
    this.classGroup.id = 0;
    this.classGroupSaveDialog = true;
  }

}
