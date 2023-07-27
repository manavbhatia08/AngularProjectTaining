import { Component } from '@angular/core';
import { Usersignup } from './user';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent {

  user1 = new Usersignup();

  save(): void {

  }



}
