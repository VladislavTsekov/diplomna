import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Student} from "../commonModels/Student";
import {ClassGroup} from "../commonModels/ClassGroup";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private environment = 'http://localhost:4713/sm/api';

  saveStudentUrl = this.environment + "/student/save";
  deleteStudentUrl = this.environment + "/student/delete/?id=";
  getAllStudentsUrl = this.environment + "/student/findAll";
  getAllClassGroupsUrl = this.environment + "/classGroup/findAll";
  getAllStudentsByClassGroupUrl = this.environment + "/student/findAllByClassGroup/?classGroupName="
  constructor(private http: HttpClient) { }

  async saveStudent(student: Student){
    return await this.http.post(this.saveStudentUrl, student, {responseType: "text"}).toPromise();
  }

  getAllStudents(){
    return this.http.get<Student[]>(this.getAllStudentsUrl);
  }

  getAllStudentsByClassGroup(name: string){
    return this.http.get<Student[]>(this.getAllStudentsByClassGroupUrl+name);
  }

  getAllClassGroups(){
    return this.http.get<ClassGroup[]>(this.getAllClassGroupsUrl).toPromise();
  }

  async deleteStudent(id: number){
    return await this.http.delete(this.deleteStudentUrl + id, {responseType: "text"}).toPromise();
  }


}
