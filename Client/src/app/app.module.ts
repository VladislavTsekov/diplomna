import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { ClassGroupComponent } from './class-group/class-group.component';
import { MainComponent } from './Views/main/main.component';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                  //api
import {Button, ButtonModule} from "primeng/button";
import {HttpClientModule} from "@angular/common/http";
import {ConfirmationService, MessageService} from "primeng/api";
import {DialogModule} from "primeng/dialog";
import {InputTextModule} from "primeng/inputtext";
// import {MatButtonModule} from "angular/material/button";
import {FormsModule} from "@angular/forms";
import {TableModule} from "primeng/table";
import {RippleModule} from "primeng/ripple";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {DropdownModule} from "primeng/dropdown";
import {MatDividerModule} from "@angular/material/divider";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatLabel} from "@angular/material/form-field";


@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent,
    StudentComponent,
    ClassGroupComponent,
    MainComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    TableModule,
    RippleModule,
    ConfirmDialogModule,
    DropdownModule,
    MatDividerModule,
    MatFormFieldModule
  ],
  providers: [
    ConfirmationService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
