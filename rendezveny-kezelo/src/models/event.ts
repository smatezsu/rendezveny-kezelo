import { Participant } from "./participant";
import { EventType } from "./eventType";

export class Event {
  public participants: Participant[] = [];

  constructor(
    public name: string,
    public location: string,
    public date: Date,
    public type: EventType
  ) {}

  addParticipant(participant: Participant): void {
    this.participants.push(participant);
  }

  removeParticipant(email: string): boolean {
    const index = this.participants.findIndex(p => p.email === email);
    if (index !== -1) {
      this.participants.splice(index, 1);
      return true;
    }
    return false;
  }
}