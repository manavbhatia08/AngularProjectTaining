import { Component ,OnInit } from '@angular/core';
import { courseService } from '../coursedata.service';
import { Subscription } from "rxjs";
import { CourseDetails } from '../coursedata.service';
// import { faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit{

  constructor( private cService : courseService){

  }

  sub !: Subscription;
  tempCourses : CourseDetails[] = [];
  tempCourses2 : CourseDetails[] = [];
  arr : CourseDetails[] = [];
  sum !: number;

  // financeIcon = faMoneyCheckDollar;
  getrating(rev : any) : number {
    this.sum=0;
    for(let x of rev){
      this.sum += x.rating;
    }
    return (Math.round(this.sum/rev.length));
  }


  ngOnInit(): void {
    this.tempCourses = this.cService.getCourses();
    this.tempCourses2 = this.cService.getCourses();
    
  //   this.sub = this.cService.getCourseDetails().subscribe({
  //     next:(TotalCourses: CourseDetails[]) => {
  //       this.tempCourses = TotalCourses;
  //     }
  // });
  }

  displaycategory(category : string) : void {
    this.arr = this.tempCourses.filter( x => x.cCategory==category);
    this.tempCourses = this.arr;
  }

  displayDuration(duration1 : number , duration2 : number ) : void {
    this.arr = this.tempCourses.filter( x => x.cDuration>duration1 && x.cDuration<=duration2);
    this.tempCourses = this.arr;
  }
  displayDifficulty(difficulty: string) : void {
    this.arr = this.tempCourses.filter( x => x.cDifficulty==difficulty);
    this.tempCourses = this.arr;
  }
  reset() : void {
    this.arr = this.tempCourses2;
    this.tempCourses = this.arr;
  }
  

}
