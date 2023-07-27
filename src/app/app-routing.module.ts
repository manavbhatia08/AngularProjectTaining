import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoursepageComponent } from './coursepage/coursepage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CoursesComponent } from './courses/courses.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {  path : '' , component : HomeComponent },
  {  path : 'home' , component : HomeComponent , redirectTo : '' },
  {  path : 'course-page/:id' , component : CoursepageComponent },
  {  path : 'login' , component : LoginComponent },
  {  path : 'signup' , component : SignupComponent },
  {  path : 'explorecourses' , component : CoursesComponent },
  {  path : '**' , component : ErrorComponent },
  




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
