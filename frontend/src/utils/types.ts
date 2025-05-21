export interface IUser {
    _id?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    role?: string;
    is2fa?: boolean;
    isActive?: boolean;
    phone?: string;
    profile?: string;
  }