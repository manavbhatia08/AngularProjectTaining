import { Component } from '@angular/core';
import { userService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _userService: userService) {
    // localStorage.setItem("users", JSON.stringify(_userService.getAllUsers()));
  }

  title = 'project1';
}
