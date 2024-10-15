import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Option {
  text: string;
  votes: number;
}

export interface Poll {
  _id?: string;
  questions: string;
  options: Option[];
}

@Injectable({
  providedIn: 'root'
})
export class PollService {
  private apiUrl = 'http://localhost:3000/api/polls';

  constructor(private http: HttpClient) {}

  createPoll(poll: Poll): Observable<Poll> {
    return this.http.post<Poll>(this.apiUrl, poll);
  }

  getPolls(): Observable<Poll[]> {
    return this.http.get<Poll[]>(this.apiUrl);
  }

  votePoll(pollId: string, optionIndex: number): Observable<Poll> {
    return this.http.post<Poll>(`${this.apiUrl}/vote`, { pollId, optionIndex });
  }
}
