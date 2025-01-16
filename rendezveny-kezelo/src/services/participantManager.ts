// RÉSZTVEVŐK REGISZTRÁLÁSA. TÖRLÉSE, ELLENŐRZÉSE //

import { Participant } from "../models/participant";
import { Event } from "../models/event";

export class ParticipantManager {
  registerParticipant(event: Event, participant: Participant): boolean {
    if (!event.participants.some(p => p.email === participant.email)) {
      event.addParticipant(participant);
      return true;
    }
    return false;
  }

  unregisterParticipant(event: Event, email: string): boolean {
    return event.removeParticipant(email);
  }
}
