// models/poll.model.ts
export interface Poll {
  _id: string;        // Unique identifier for the poll
  questions: string;      // Title of the poll
  options: {         // Array of options for the poll
      text: string;   // Text of the option
      votes: number;  // Number of votes for the option
  }[];
}
