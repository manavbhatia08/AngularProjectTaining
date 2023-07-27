import { Component, OnInit } from '@angular/core';
import { userService,user } from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(private uService : userService){}


  ngOnInit(): void {
    
  }
  lPassword !: string;
    lEmail !: string;
    arr !: user[];
    u !: user;
    x !: user;
    temp : boolean = false;

  checklogin(): boolean {
    
    this.lEmail = (<HTMLInputElement>document.getElementById("Email")).value;
    this.lPassword = (<HTMLInputElement>document.getElementById("Password")).value;

    if( this.lEmail != "" &&  this.lPassword!=""){
      // this.uService.createuser(this.sEmail , this.sEmail , this.sPassword , this.sCountry);
      this.arr = JSON.parse(localStorage.getItem("users") || '[]');
      console.log(this.arr);

      for( let u of this.arr){
        if( this.lEmail == u.email ){
          this.temp=true;
          for( let x of this.arr){
            if( this.lPassword == x.password) {
              this.temp=true;
              break;
            }
        }
      }

    }
}
return this.temp;
  }



  
}
