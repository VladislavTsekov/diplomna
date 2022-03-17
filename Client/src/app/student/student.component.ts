import {Component, Input, OnInit} from '@angular/core';
import {StudentService} from "./student.service";
import {Router} from "@angular/router";
import {ConfirmationService, Message, MessageService} from "primeng/api";
import {Student} from "../commonModels/Student";
import {ClassGroup} from "../commonModels/ClassGroup";
import {ClassGroupService} from "../class-group/class-group.service";

interface Option {
  name: string;
  id: number;
}

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  styles: [
    `
      :host ::ng-deep .p-dialog .product-image {
        width: 150px;
        margin: 0 auto 2rem auto;
        display: block;
      }
    `
  ],
})
export class StudentComponent implements OnInit {

  //todo: show students only from the classGroup clicked!!!?

  //@ts-ignore
  dataSource;
  //@ts-ignore
  student: Student = {classGroup: {}} as Student;
  //@ts-ignore
  studentSaveDialog: boolean;
  json=JSON; //{{json.stringify(Object)}} in html for test purposes
  classGroupOptions: Option[] = [];

  constructor(private studentService: StudentService, private router: Router,
              private confirmationService: ConfirmationService,
              private messageService: MessageService,
              private classGroupService: ClassGroupService) { }

  async ngOnInit(){
    let defaultOption = {name: '', id: -1};
    this.refreshGrid()

    this.classGroupService.getAllClassGroups().subscribe((data) => { //don't ask, don't remember, dropdown option visualisation
      this.classGroupOptions = data.map(({name, id}) => {
        return {name: name, id}
      })
      this.classGroupOptions.unshift(defaultOption);
    })

  }

  refreshGrid(){
    this.studentService.getAllStudents().subscribe(data => {this.dataSource = data});
  }

  backToClassGroups(){
    this.router.navigate([
      "/classGroup"
    ])
  }

  async delete(student: Student){
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + student.firstName + ' ' + student.lastName + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: ()=>{
        this.deleteStudent(student);
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'Line Deleted', life: 3000 });
      }
    });
  }

  async deleteStudent(student: Student){
    await this.studentService.deleteStudent(student.id);
    await this.refreshGrid();
  }

  editStudent(student: Student) {
    this.student = {...student};
    this.studentSaveDialog = true;
  }

  async save(){
    await this.studentService.saveStudent(this.student);

    this.dataSource = [...this.dataSource];
    this.studentSaveDialog = false;
    //@ts-ignore
    this.student = {classGroup: {}} as Student;

    this.refreshGrid();
  }

  hideDialog() {
    this.studentSaveDialog = false;
  }

  openNew() {
    //@ts-ignore
    this.student= {classGroup: {id: null}};
    this.student.id = 0;
    this.studentSaveDialog = true;
  }

}
