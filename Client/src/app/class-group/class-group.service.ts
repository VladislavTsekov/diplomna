import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ClassGroup} from "../commonModels/ClassGroup";

@Injectable({
  providedIn: 'root'
})
export class ClassGroupService {

  private environment = 'http://localhost:4713/sm/api/classGroup';

  saveClassGroupUrl = this.environment + "/save";
  deleteClassGroupUrl = this.environment + "/delete/?id=";
  getAllClassGroupsUrl = this.environment + "/findAll";

  constructor(private http: HttpClient) { }

  async saveClassGroup(classGroup: ClassGroup){
    return await this.http.post(this.saveClassGroupUrl, classGroup, {responseType: "text"}).toPromise();
  }

  getAllClassGroups(){
    return this.http.get<ClassGroup[]>(this.getAllClassGroupsUrl);
  }

  async deleteClassGroup(id: number){
    return await this.http.delete(this.deleteClassGroupUrl + id, {responseType: "text"}).toPromise();
  }

}
