import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/User.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
      private userService: UserService
  ) { }

  ngOnInit() {
  }

  logout() {
    this.userService.userLogout();

  }
}
