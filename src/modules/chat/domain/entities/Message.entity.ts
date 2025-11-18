import type { MessageValues } from '../interfaces';

export class Message {
  constructor(private values: MessageValues) {}

  public toValues(): MessageValues {
    return this.values;
  }
}
