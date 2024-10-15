import { Component, OnInit } from '@angular/core';
import { Poll, PollService } from '../../poll.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from "../spinner/spinner.component";

@Component({
  selector: 'app-poll-list',
  standalone: true,
  imports: [RouterModule, CommonModule, SpinnerComponent],
  templateUrl: './poll-list.component.html',
  styleUrls: ['./poll-list.component.css']
})
export class PollListComponent implements OnInit {
  polls: Poll[] = [];
  hasVoted: { [key: string]: boolean } = {};
  loading: boolean = false; // Loading state
  loadingDelay: number = 1000; // Set the loading delay to 10 seconds (10,000 milliseconds)
  menuOpen: boolean = false;

  constructor(private pollService: PollService) {}

  ngOnInit(): void {
    this.loadPolls();
  }

  loadPolls() {
    this.loading = true;

    // Use setTimeout to create a 10-second delay before loading polls
    setTimeout(() => {
      this.pollService.getPolls().subscribe(polls => {
        this.polls = polls;
        this.loading = false; 
      }, () => {
        this.loading = false; 
      });
    }, this.loadingDelay); // Loading spinner will be visible for 10 seconds
  }

  vote(pollId: string | undefined, optionIndex: number) {
    if (!pollId) {
      alert("Poll ID is undefined!");
      return;
    }

    if (this.hasVoted[pollId]) {
      alert("You have already voted on this poll!");
      return;
    }

    this.loading = true; 
    this.pollService.votePoll(pollId, optionIndex).subscribe(() => {
      this.hasVoted[pollId] = true;
      setTimeout(()=>{
        this.loadPolls();
        this.loading = false;
      }, 3000); 
    }, () => {
      this.loading = false;
    });
  }
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

}
