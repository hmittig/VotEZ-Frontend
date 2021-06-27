import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { User } from 'src/app/models/user';
import { VotezRESTService } from 'src/app/services/votez-rest.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  userinfo: User;
  useremail: string;
  adminvalue: boolean = false;
  constructor(public auth:AuthService, private userService: VotezRESTService) { 
    this.userinfo =
    {
      id: 0,
      name: '',
      email: '',
      isAdmin: false
    }
    this.useremail =''
  }
  ngOnInit(): void {
    this.auth.user$.subscribe (
      user =>
      this.userService.GetUserByEmail(user.email).subscribe
      (
        foundUser =>
        {
          this.userinfo = foundUser;
          if(this.userinfo.isAdmin == true)
          {
            this.adminvalue = true;
          }
        }
      )
    )
  }

}
