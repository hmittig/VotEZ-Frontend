import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { poll } from 'src/app/models/poll';
import { VotezRESTService } from 'src/app/services/votez-rest.service';

@Component({
  selector: 'app-access-poll',
  templateUrl: './access-poll.component.html',
  styleUrls: ['./access-poll.component.css']
})
export class AccessPollComponent implements OnInit {
  code: string;
  retrievedpoll: poll;
  useremail: string
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
         }
       )
     )
  }


  onSubmit(): void{
    this.pollService.PollCheck(this.code,this.useremail).subscribe(
      poll =>
      {
        this.retrievedpoll = poll;
        this.GetPollByID(this.retrievedpoll.id);
      }
    )
    
  }

  GetPollByID(id: number){
    this.router.navigate(['vote'], {
      queryParams: {poll: id}
    });
  }

}


