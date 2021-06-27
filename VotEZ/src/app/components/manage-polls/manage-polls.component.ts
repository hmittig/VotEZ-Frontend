import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { poll } from 'src/app/models/poll';
import { VotezRESTService } from 'src/app/services/votez-rest.service';

@Component({
  selector: 'app-manage-polls',
  templateUrl: './manage-polls.component.html',
  styleUrls: ['./manage-polls.component.css']
})
export class ManagePollsComponent implements OnInit {
  polls: poll[] = [];
  constructor(public pollService: VotezRESTService, private router: Router) { }

  ngOnInit(): void {
    this.pollService.GetAllPolls().subscribe(
      (result) =>{
       this.polls = result;
      }
    )
  }

  GetPollByID(id: number){
    this.router.navigate(['poll-details'], {
      queryParams: {poll: id}
    });
  }

  DeletePoll(id: number): void {
    if (confirm('Are you sure you want to delete this poll?').valueOf()) {
      this.pollService.DeletePoll(id).subscribe(
        () => {
          alert('Poll has been successfully deleted.');
          this.router.navigate(['manage=polls']);
        }
      );
    }
  }
}
