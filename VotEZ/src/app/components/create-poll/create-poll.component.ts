import { getLocaleDateTimeFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { poll } from 'src/app/models/poll';
import { VotezRESTService } from 'src/app/services/votez-rest.service';

@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.css']
})
export class CreatePollComponent implements OnInit {
  newpoll: poll;
  constructor(private pollService: VotezRESTService) {
    this.newpoll =
    {
      id: 0,
      question: '',
      code: '',
      dateToClose: Date.now,
      email: '',
      pollchoice:
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
  }

  onSubmit(): void{
    this.pollService.CreateAPoll(this.newpoll).subscribe(
      (poll) =>
      {
        alert(`${poll.email} has created a new poll!`);
      }
    )
  }
}
