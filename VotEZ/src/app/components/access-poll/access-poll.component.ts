import { Component, OnInit } from '@angular/core';
import { poll } from 'src/app/models/poll';

@Component({
  selector: 'app-access-poll',
  templateUrl: './access-poll.component.html',
  styleUrls: ['./access-poll.component.css']
})
export class AccessPollComponent implements OnInit {
  code: string;
  retirevedpoll: poll;
  constructor() { }

  ngOnInit(): void {
  }


  onSubmit(): void{
    
  }
}
