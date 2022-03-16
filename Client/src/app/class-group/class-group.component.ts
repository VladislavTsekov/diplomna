import { Component, OnInit } from '@angular/core';
import {ClassGroupService} from "./class-group.service";

@Component({
  selector: 'app-class-group',
  templateUrl: './class-group.component.html',
  styleUrls: ['./class-group.component.css']
})
export class ClassGroupComponent implements OnInit {

  //@ts-ignore
  dataSource;

  constructor(private classGroupService: ClassGroupService) { }

  ngOnInit(): void {
    this.classGroupService.getAllClassGroups().subscribe(data => {this.dataSource=data});
  }

}
