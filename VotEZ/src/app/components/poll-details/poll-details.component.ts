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
          }
        )
      }
    )
  }

  back(): void {
    this.location.back();
}

}
