import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Task2Component } from './_components/task2/task2.component';
import { Task1Component } from './_components/task1/task1.component';
const routes: Routes = [
  { path: 'task1', component: Task1Component },
  { path: 'task2', component: Task2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
