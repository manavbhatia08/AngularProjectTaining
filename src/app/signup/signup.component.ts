import { Component , OnInit} from '@angular/core';
import { userService , user } from '../user.service';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
@Injectable({providedIn: 'root'})
export class SignupComponent implements OnInit{

  constructor( private route : ActivatedRoute,  private uService : userService){

  }



  ngOnInit(): void {
    
  }
  sName !: string;
    sEmail !: string;
    sPassword !: string;
    sCountry !: string;
    arr!:user[];
    temp !: boolean;


  sendsignupdata() : void {

    this.sName = (<HTMLInputElement>document.getElementById("Name")).value;
    this.sEmail = (<HTMLInputElement>document.getElementById("Email")).value;
    this.sPassword = (<HTMLInputElement>document.getElementById("Password")).value;
    this.sCountry = (<HTMLInputElement>document.getElementById("Country")).value;

    if( this.sName != "" && this.sEmail != "" &&  this.sPassword!="" && this.sCountry!=""){
      // this.uService.createuser(this.sEmail , this.sEmail , this.sPassword , this.sCountry);
      this.arr = JSON.parse(localStorage.getItem("users") || '[]');
      console.log(this.arr);

      this.arr.push({
        id  : this.arr.length+1,
            name : this.sName,
    email :this.sEmail ,
    password : this.sPassword,
    country : this.sCountry,
      })

      localStorage.clear();
      console.log(localStorage);

      localStorage.setItem("users", JSON.stringify(this.arr));
      this.temp=true;
    }
    else this.temp=false;


    localStorage.setItem("toggle" , JSON.stringify(this.temp) );
}
}