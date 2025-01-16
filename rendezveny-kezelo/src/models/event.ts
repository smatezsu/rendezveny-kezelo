// ESEMÉNY ADATOK //

import { EventType } from "./eventType";

export class Event {
  constructor(
    public name: string,
    public location: string,
    public date: Date,
    public type: EventType
  ) {}

  toString(): string {
    return `Event: ${this.name}, Location: ${this.location}, Date: ${this.date.toLocaleDateString()}, Type: ${this.type}`;
  }
}