import { Component, OnInit } from '@angular/core';
import { SignupComponent } from '../signup/signup.component';
import { Injectable } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
@Injectable({providedIn: 'root'})
export class NavbarComponent  implements OnInit{


  
  constructor( private sComponent : SignupComponent){
  }
  temp1!:boolean;
  
  ngOnInit(): void {
    
    this.temp1 = JSON.parse(localStorage.getItem("toggle") || '');
  }
  logout(): void{
    this.temp1 = ! this.temp1;
  }

}
