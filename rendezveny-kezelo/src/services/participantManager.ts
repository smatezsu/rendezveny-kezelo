// RÉSZTVEVŐK REGISZTRÁLÁSA. TÖRLÉSE, ELLENŐRZÉSE //

import { Participant } from "../models/participant";
import { Event } from "../models/event";

export class ParticipantManager {
  private participants: Map<string, Participant[]> = new Map();

  // Résztvevők hozzáadása
  registerParticipant(event: Event, participant: Participant): boolean {
    if (!this.participants.has(event.name)) {
      this.participants.set(event.name, []);
    }
    const eventParticipants = this.participants.get(event.name)!;
    if (!eventParticipants.some(p => p.email === participant.email)) {
      eventParticipants.push(participant);
      return true;
    }
    return false;
  }

  // Résztvevők eltávolítása
  unregisterParticipant(event: Event, email: string): boolean {
    const eventParticipants = this.participants.get(event.name);
    if (eventParticipants) {
      const index = eventParticipants.findIndex(p => p.email === email);
      if (index !== -1) {
        eventParticipants.splice(index, 1);
        return true;
      }
    }
    return false;
  }

  // Résztvevők listázása
  listParticipants(event: Event): Participant[] {
    return this.participants.get(event.name) || [];
  }
}
