import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { pollvote } from '../models/pollvote';

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
  pollVoteURL : string = environment.POLL_VOTE;
  // query external REST API
  constructor(private http: HttpClient) { }

  // Logic
  GetAllVotes() : Observable<pollvote[]>{
    return this.http.get<pollvote[]>(`${this.pollVoteURL}`,this.httpOptions);
  }
}
