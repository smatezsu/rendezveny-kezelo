import { EventManager } from "./services/eventManager";
import { ParticipantManager } from "./services/participantManager";
import { EventType } from "./models/eventType";
import { Participant } from "./models/participant";

const eventManager = new EventManager();
const participantManager = new ParticipantManager();

// Esemény létrehozása
const familyEvent = eventManager.createEvent(
  "Családi Ünnepség",
  "Budapest",
  new Date("2025-06-15"),
  EventType.FamilyGathering
);


