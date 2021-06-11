import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { poll } from 'src/app/models/poll';
import { VotezRESTService } from 'src/app/services/votez-rest.service';

@Component({
  selector: 'app-your-polls',
  templateUrl: './your-polls.component.html',
  styleUrls: ['./your-polls.component.css']
})
export class YourPollsComponent implements OnInit {
  yourpollss: poll[] = [];
  useremail: string;
  constructor(private authService :AuthService, public pollService: VotezRESTService, private router: Router) { 
  }

  ngOnInit(): void {
    this.authService.user$.subscribe
     (
       authUser =>

       this.pollService.GetUserByEmail(authUser.email).subscribe
       (
         foundUser =>
         {
           this.useremail = foundUser.email;
           this.pollService.GetPollsByUser(this.useremail).subscribe(
             (result) =>{
              this.yourpollss = result;
             }
           )

         }
       )
     )
  }

  GetPollByID(id: number){
    this.router.navigate(['poll-details'], {
      queryParams: {poll: id}
    });
  }

}
