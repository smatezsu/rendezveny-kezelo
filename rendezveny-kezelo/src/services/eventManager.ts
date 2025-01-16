// RENDEZVÉNYEK LÉTREHOZÁSA, TÖRLÉSE ÉS SZŰRÉSE //

import { Event } from "../models/event";
import { EventType } from "../models/eventType";

export class EventManager {
  private events: Event[] = [];

  createEvent(name: string, location: string, date: Date, type: EventType): Event {
    const event = new Event(name, location, date, type);
    this.events.push(event);
    return event;
  }

  listEvents(): Event[] {
    return this.events;
  }

  deleteEvent(name: string): boolean {
    const index = this.events.findIndex(e => e.name === name);
    if (index !== -1) {
      this.events.splice(index, 1);
      return true;
    }
    return false;
  }

  filterEventsByType(type: EventType): Event[] {
    return this.events.filter(event => event.type === type);
  }
}
