import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { pollvote } from '../models/pollvote';
import { poll } from '../models/poll';
import { User } from '../models/user';


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
  userURL: string = environment.USER;
  pollURL: string = environment.POLL;
  pollVoteURL : string = environment.POLL_VOTE;
  // query external REST API
  constructor(private http: HttpClient) { }

  // Logic

  //User Logic
  GetUser(userid:number ) : Observable<any>
  {
    return this.http.get<User>(`${this.userURL}/${userid}`, this.httpOptions)
  }

  GetUserByEmail(email?:string) : Observable<any>
  {
    return this.http.get<User>(`${this.userURL}/email/${email}`, this.httpOptions);
    
  }

  //Poll Logic
  CreateAPoll(newpoll: poll): Observable<poll>
  {
    return this.http.post<poll>(this.pollURL, newpoll, this.httpOptions);
  }

  GetPollsByUser(email?: string) : Observable<poll []>{
    return this.http.get<poll[]>(`${this.pollURL}/createdpolls/${email}`,this.httpOptions);
  }

  GetPollByID(id: number) : Observable<poll>{
    return this.http.get<poll>(`${this.pollURL}/${id}`, this.httpOptions);
  }

  GetAllPolls() : Observable<poll[]>{
    return this.http.get<poll[]>(`${this.pollURL}`,this.httpOptions);
  }

  DeletePoll(id: number): Observable<any> {
    return this.http.delete<any>(`${this.pollURL}/${id}`, this.httpOptions);
  }

  GetAllVotes() : Observable<pollvote[]>{
    return this.http.get<pollvote[]>(`${this.pollVoteURL}`,this.httpOptions);
  }

  GetPollsUserHasVotedOn(email?: string) : Observable<poll []> {
    return this.http.get<poll[]>(`${this.pollURL}/votedpolls/${email}`,this.httpOptions);
  }

  PollCheck(code?: string, email?: string): Observable<poll>{
    return this.http.get<poll>(`${this.pollURL}/${code},${email}`, this.httpOptions);
  }

  // PollVote Logic
  AddAVote(pv: pollvote): Observable<pollvote>
  {
    return this.http.post<pollvote>(this.pollVoteURL, pv, this.httpOptions);
  }
  
  GetOption1Total(pollID: number, option1: string): Observable<number>{
    return this.http.get<number>(`${this.pollVoteURL}/total1/${pollID},${option1}`,this.httpOptions);
  }

  GetOption2Total(pollID: number, option2: string): Observable<number>{
    return this.http.get<number>(`${this.pollVoteURL}/total2/${pollID},${option2}`,this.httpOptions);
  }

  GetOption3Total(pollID: number, option3: string): Observable<number>{
    return this.http.get<number>(`${this.pollVoteURL}/total3/${pollID},${option3}`,this.httpOptions);
  }
}
