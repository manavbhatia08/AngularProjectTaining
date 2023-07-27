import { Component } from '@angular/core';
import { courseService } from '../coursedata.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor( private cService : courseService){

  }

  tempCourses  = this.cService.getCourses();

}
