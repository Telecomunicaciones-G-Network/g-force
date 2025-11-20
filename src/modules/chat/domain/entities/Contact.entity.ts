// DONE:

import type { ContactValues, MessageValues } from '../interfaces';

export class Contact {
  private id: string;
  private name: string;
  private latestMessage: MessageValues;

  constructor(id: string, name: string, latestMessage: MessageValues) {
    this.id = id;
    this.name = name;
    this.latestMessage = latestMessage;
  }

  public toValues(): ContactValues {
    return {
      id: this.id,
      name: this.name,
      latestMessage: this.latestMessage,
    };
  }
}
