import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { pollvote } from '../models/pollvote';
import { poll } from '../models/poll';

@Injectable({
  providedIn: 'root'
})
export class VotezRESTService {
  // headers go here
  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json'
      }
    )
  }
  // defined urls to query
  pollURL: string = environment.POLL;
  pollVoteURL : string = environment.POLL_VOTE;
  // query external REST API
  constructor(private http: HttpClient) { }

  // Logic

  //Poll Logic
  CreateAPoll(newpoll: poll): Observable<poll>
  {
    return this.http.post<poll>(this.pollURL, newpoll, this.httpOptions);
  }

  GetAllVotes() : Observable<pollvote[]>{
    return this.http.get<pollvote[]>(`${this.pollVoteURL}`,this.httpOptions);
  }
}
