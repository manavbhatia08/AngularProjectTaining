import { Component, OnInit } from '@angular/core';
import { CourseDetails, courseService } from '../coursedata.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-coursepage',
  templateUrl: './coursepage.component.html',
  styleUrls: ['./coursepage.component.css']
})
export class CoursepageComponent  implements OnInit{

  constructor( private route : ActivatedRoute,  private cService : courseService){

  }


  reviewForm !: any;
  text !: any;
  rating !: any;
  a!:any;

  courseId : number  = 0;
  course!: CourseDetails; 
  curriculum!: any[];
  content !: any[];
  review !: any[];

  
  ngOnInit(): void {

    this.reviewForm = new FormGroup({
      text: new FormControl(''),
      rating: new FormControl(''),
    });

    this.courseId = +(this.route.snapshot.params["id"]);
    console.log(this.courseId);
    this.course = this.cService.getCourse(this.courseId);
    this.curriculum = this.course.cCurriculum;
    console.log(this.curriculum);
    this.review = this.course.cReviews;

    // this.content = this.curriculum.content;

  }

  onSubmit():void{
    console.log(this.reviewForm.value);
    this.a = this.reviewForm.value;
    (<HTMLInputElement>document.getElementById("text")).value = '';
    (<HTMLInputElement>document.getElementById("rating")).value = '';
    this.review.push(this.a);
    // this.text("");
    

  }

  
  sum !: number;

  getrating(rev : any) : number {
    this.sum=0;
    for(let x of rev){
      this.sum += x.rating;
    }
    return (Math.round(this.sum/rev.length));
  }

  enrollednow( bool : boolean) : void {
    this.course.cEnroll = !bool;
  }
  
}


