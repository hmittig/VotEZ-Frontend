import { Component, OnInit } from '@angular/core';
import { pollvote } from 'src/app/models/pollvote';
import { VotezRESTService } from 'src/app/services/votez-rest.service';

@Component({
  selector: 'app-poll-votes',
  templateUrl: './poll-votes.component.html',
  styleUrls: ['./poll-votes.component.css']
})
export class PollVotesComponent implements OnInit {
  // Properties
  // Holds all votes from API, will be changed later
  pollvotes: pollvote[] = [];

  // Dependency injection
  constructor(private pollVoteService: VotezRESTService) { }

  // Lifecycle hook
  ngOnInit(): void {
    this.pollVoteService.GetAllVotes().subscribe(
      (result) => {
        this.pollvotes = result;
      }
    );
  }

}
