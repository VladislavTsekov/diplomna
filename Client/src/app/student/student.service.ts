import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Student} from "../commonModels/Student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private environment = 'http://localhost:4713/sm/api/student';

  saveStudentUrl = this.environment + "/save";
  deleteStudentUrl = this.environment + "/delete/?id=";
  getAllStudentsUrl = this.environment + "/findAll";

  constructor(private http: HttpClient) { }

  async saveStudent(student: Student){
    return await this.http.post(this.saveStudentUrl, student, {responseType: "text"}).toPromise();
  }

  getAllStudents(){
    return this.http.get<Student[]>(this.getAllStudentsUrl);
  }

  async deleteStudent(id: number){
    return await this.http.delete(this.deleteStudentUrl + id, {responseType: "text"}).toPromise();
  }


}
