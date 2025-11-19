import type { UserValues } from '../interfaces';

export class User {
  private id: string;
  private createdAt: Date;
  private dateJoined: Date;
  private email: string;
  private firstname: string;
  private isActive: boolean;
  private lastname: string;
  private permissions: string[];
  private roles: string[];
  private updatedAt: Date;

  constructor(
    id: string = '',
    createdAt: Date = new Date(),
    dateJoined: Date = new Date(),
    email: string = '',
    firstname: string = '',
    isActive: boolean = false,
    lastname: string = '',
    permissions: string[] = [],
    roles: string[] = [],
    updatedAt: Date = new Date(),
  ) {
    this.id = id;
    this.createdAt = createdAt;
    this.dateJoined = dateJoined;
    this.email = email;
    this.firstname = firstname;
    this.isActive = isActive;
    this.lastname = lastname;
    this.permissions = permissions;
    this.roles = roles;
    this.updatedAt = updatedAt;
  }

  public getFullName(): string {
    return `${this.firstname} ${this.lastname}`;
  }

  public getFirstname(): string {
    return this.firstname;
  }

  public toValues(): UserValues {
    return {
      createdAt: this.createdAt,
      dateJoined: this.dateJoined,
      email: this.email,
      firstname: this.firstname,
      id: this.id,
      isActive: this.isActive,
      lastname: this.lastname,
      permissions: this.permissions,
      roles: this.roles,
      updatedAt: this.updatedAt,
    };
  }
}
