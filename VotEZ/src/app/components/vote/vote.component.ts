import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { poll } from 'src/app/models/poll';
import { VotezRESTService } from 'src/app/services/votez-rest.service';
import { Location } from '@angular/common';
import { pollvote } from 'src/app/models/pollvote';
import { AuthService } from '@auth0/auth0-angular';


@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  poll: poll;
  pollvote: pollvote;
  useremail: string;
  op1total: number;
  op2total: number;
  op3total: number;
  constructor(private authService: AuthService, private pollService: VotezRESTService, private route: ActivatedRoute, private router: Router, private location: Location) { 
    this.poll =
    {
      id: 0,
      question: '',
      code: '',
      dateToClose: Date.now,
      email: '',
      pollChoice:
      {
        id: 0,
        pollID: 0,
        option1: '',
        option2: '',
        option3: ''
      }
    },
    this.pollvote = 
    {
      id: 0,
    email: '',
    pollID: 0,
    choice: ''
    }
  }
  ngOnInit(): void {
    this.route.queryParams
    .subscribe(
      params => {
        this.pollService.GetPollByID(params.poll).subscribe(
          foundPoll => {
            this.poll = foundPoll;
            this.pollvote.pollID = this.poll.id;
            console.log(foundPoll);
            this.pollService.GetOption1Total(this.poll.id, this.poll.pollChoice.option1).subscribe(
              op1 => {
                this.op1total = op1;
                console.log(op1);
              }
            )
            this.pollService.GetOption2Total(this.poll.id, this.poll.pollChoice.option2).subscribe(
              op2 => {
                this.op2total = op2;
                console.log(op2);
              }
            )
            this.pollService.GetOption3Total(this.poll.id, this.poll.pollChoice.option3).subscribe(
              op3 => {
                this.op3total = op3;
                console.log(op3);
              }
            )
          }
        )
      }
    )
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

  Vote(choice: string){
    this.pollvote.choice = choice;
    this.pollvote.email = this.useremail;
     this.pollService.AddAVote(this.pollvote).subscribe(
      (poll) =>
      {
        alert(`${this.pollvote.email} has successfully voted! Click OK to return to the homepage.`);
        this.router.navigate(['']);
      }
    )
  }

  back(): void {
    this.location.back();
}


}
