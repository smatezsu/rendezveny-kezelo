// RÉSZTVEVŐK ADATAI //

export class Participant {
    constructor(public name: string, public email: string) {}
  
    toString(): string {
      return `${this.name} (${this.email})`;
    }
  }
  