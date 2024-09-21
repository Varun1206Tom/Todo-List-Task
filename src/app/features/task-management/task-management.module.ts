import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TaskManagementRoutingModule } from './task-management-routing.module';
import { TaskManagementComponent } from './components/task-management/task-management.component';


@NgModule({
  declarations: [
    TaskManagementComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TaskManagementRoutingModule
  ]
})
export class TaskManagementModule { }
