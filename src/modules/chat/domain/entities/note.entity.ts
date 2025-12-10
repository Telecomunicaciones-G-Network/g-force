import type { NoteValues } from '../interfaces';

export class Note {
  constructor(
    public id: string,
    public agentId: string,
    public comment: string,
    public createdAt: string = new Date().toISOString().replace('Z', '000Z'),
    public updatedAt: string | null = null,
  ) {}

  public toValues(): NoteValues {
    return {
      id: this.id,
      agentId: this.agentId,
      comment: this.comment,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
