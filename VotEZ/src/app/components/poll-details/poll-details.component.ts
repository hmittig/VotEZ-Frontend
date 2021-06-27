import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { poll } from 'src/app/models/poll';
import { VotezRESTService } from 'src/app/services/votez-rest.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-poll-details',
  templateUrl: './poll-details.component.html',
  styleUrls: ['./poll-details.component.css']
})
export class PollDetailsComponent implements OnInit {
  poll: poll;
  op1total: number;
  op2total: number;
  op3total: number;
  constructor(private pollService: VotezRESTService, private route: ActivatedRoute, private router: Router, private location: Location) { 
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
    }
  }
  ngOnInit(): void {
    this.route.queryParams
    .subscribe(
      params => {
        this.pollService.GetPollByID(params.poll).subscribe(
          foundPoll => {
            this.poll = foundPoll;
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
  }

  back(): void {
    this.location.back();
}

}
