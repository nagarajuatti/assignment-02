export enum UserRole {
    Admin = 'Admin',
    User = 'User',
    Guest = 'Guest'
  }
  
  export class User {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string,
      public email: string,
      public phoneNumber: string,
      public role: UserRole,
      public address: string
    ) {}
  }