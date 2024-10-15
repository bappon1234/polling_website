import { Component } from '@angular/core';
import { Poll, PollService } from '../../poll.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-create-poll',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './create-poll.component.html',
  styleUrl: './create-poll.component.css'
})
export class CreatePollComponent {
  newPoll: Poll = { questions: '', options: [{ text: '', votes: 0 }] };

  constructor(private pollService: PollService) {}

  addOption() {
    this.newPoll.options.push({ text: '', votes: 0 });
  }

  removeOption(index: number) {
    this.newPoll.options.splice(index, 1);
  }

  createPoll() {
    this.pollService.createPoll(this.newPoll).subscribe(() => {
      this.newPoll = { questions: '', options: [{ text: '', votes: 0 }] }; // Reset form
      alert('Poll created successfully!');
    });
  }
}