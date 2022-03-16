import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Teacher} from "../commonModels/Teacher";

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private environment = 'http://localhost:4713/sm/api/teacher';

  saveTeacherUrl = this.environment + "/save";
  deleteTeacherUrl = this.environment + "/delete/?id=";
  getAllTeachersUrl = this.environment + "/findAll";

  constructor(private http: HttpClient) { }

  async saveTeacher(teacher: Teacher){
    return await this.http.post(this.saveTeacherUrl, teacher, {responseType: "text"}).toPromise();
  }

  getAllTeachers(){
    return this.http.get<Teacher[]>(this.getAllTeachersUrl);
  }

  async deleteTeacher(id: number){
    return await this.http.delete(this.deleteTeacherUrl + id, {responseType: "text"}).toPromise();
  }

}
