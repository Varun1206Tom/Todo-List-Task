import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskManagementComponent } from './components';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', component: TaskManagementComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskManagementRoutingModule { }
