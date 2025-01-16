import { EventManager } from "./services/eventManager";
import { ParticipantManager } from "./services/participantManager";
import { EventType } from "./models/eventType";
import { Participant } from "./models/participant";

// Manager létrehozása
const eventManager = new EventManager();
const participantManager = new ParticipantManager();

// Esemény létrehozása
const familyEvent = eventManager.createEvent(
  "Családi Ünnepség",
  "Budapest",
  new Date("2025-06-15"),
  EventType.FamilyGathering
);

// Résztvevők "létrehozása"
const john = new Participant("John Doe", "john.doe@example.com");
const jane = new Participant("Jane Smith", "jane.smith@example.com");

// Résztvevők regisztrálása
participantManager.registerParticipant(familyEvent, john);
participantManager.registerParticipant(familyEvent, jane);

// Események listázása
console.log("Események:");
console.log(eventManager.listEvents().map(event => event.toString()));

// Résztvevők listázása
console.log("Résztvevők:");
console.log(participantManager.listParticipants(familyEvent).map(p => p.toString()));

// Esemény törlése
eventManager.deleteEvent("Családi Ünnepség");
console.log("Események a törlés után:");
console.log(eventManager.listEvents().map(event => event.toString()));




