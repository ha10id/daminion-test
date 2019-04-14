import {
  BrowserModule
} from '@angular/platform-browser';
import {
  NgModule
} from '@angular/core';
import {
  FormsModule
} from '@angular/forms';
import {
  AppRoutingModule
} from './app-routing.module';
import {
  AppComponent
} from './app.component';
import {
  Task2Component
} from './_components/task2/task2.component';
import {
  Task1Component
} from './_components/task1/task1.component';

@NgModule({
  declarations: [
    AppComponent,
    Task2Component,
    Task1Component
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
