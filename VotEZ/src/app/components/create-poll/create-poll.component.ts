import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { poll } from 'src/app/models/poll';
import { VotezRESTService } from 'src/app/services/votez-rest.service';

@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.css']
})
export class CreatePollComponent implements OnInit {
  newpoll: poll;
  authUser: any;
  constructor(private authService :AuthService, public pollService: VotezRESTService, private router: Router) {
    this.newpoll =
    {
      id: 0,
      question: '',
      code: '',
      dateToClose: new Date,
      email: '',
      pollChoice:
      {
        id: 0,
        pollID: 0,
        option1: '',
        option2: '',
        option3: ''
      }
    }
   }



  ngOnInit(): void {
     this.authService.user$.subscribe
     (
       authUser =>

       this.pollService.GetUserByEmail(authUser.email).subscribe
       (
         foundUser =>
         {
           this.newpoll.email = foundUser.email;
         }
       )
     )
  }

  onSubmit(): void{
    this.pollService.CreateAPoll(this.newpoll).subscribe(
      (poll) =>
      {
        alert(`${this.newpoll.email} has created a new poll! Your access code is ${this.newpoll.code}. Click OK to return to the homepage.`);
        this.router.navigate(['']);
      }
    )
  }
}
