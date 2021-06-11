import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { poll } from 'src/app/models/poll';
import { VotezRESTService } from 'src/app/services/votez-rest.service';

@Component({
  selector: 'app-your-poll-history',
  templateUrl: './your-poll-history.component.html',
  styleUrls: ['./your-poll-history.component.css']
})
export class YourPollHistoryComponent implements OnInit {
  uservotedpolls: poll[] = [];
  useremail: string;

  constructor(private authService :AuthService, public pollService: VotezRESTService, private router: Router) { }

  ngOnInit(): void {
    this.authService.user$.subscribe
     (
       authUser =>

       this.pollService.GetUserByEmail(authUser.email).subscribe
       (
         foundUser =>
         {
           this.useremail = foundUser.email;
           this.pollService.GetPollsUserHasVotedOn(this.useremail).subscribe(
             (result) =>{
              this.uservotedpolls = result;
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
