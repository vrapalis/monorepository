export interface IAuthUser {
  id: string | null;
  email: string | null;
  name: string | null;
}

export interface IUser {
  id: string | null;
  email: string | null;
  password: string | null;
}

export interface IUserRegistration extends IUser {
  passwordRepeated: string | null;
}

export interface IUserResetPassword extends IUserRegistration{
  code: string | null;
}
