
export enum UserRole {
  SuperAdmin = 1,
  Admin = 2,
  Subscriber = 3
}

export class User {
  id: number;
  fn: string;
  mn: string;
  ln: string;
  email: string;
  phone: string;
  role: UserRole;
  place: string;
  isEditEnabled: boolean | undefined;
  originalData: User | undefined;

  constructor(
    firstName: string,
    middleName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    role: UserRole,
    address: string
  ) {
    this.id = 0;
    this.fn = firstName;
    this.mn = middleName;
    this.ln = lastName;
    this.email = email;
    this.phone = phoneNumber;
    this.role = role;
    this.place = address;
  }
}
