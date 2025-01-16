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

// Résztvevők hozzáadása
const john = new Participant("John Doe", "john.doe@example.com");
const jane = new Participant("Jane Smith", "jane.smith@example.com");

participantManager.registerParticipant(familyEvent, john);
participantManager.registerParticipant(familyEvent, jane);

// Események listázása
console.log("Események");
console.log(eventManager.listEvents());

// Résztvevők listázása
console.log("Résztvevők");
console.log(familyEvent.participants);



