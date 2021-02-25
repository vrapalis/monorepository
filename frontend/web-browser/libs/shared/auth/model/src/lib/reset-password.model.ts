export interface ResetPasswordModel {
  readonly email: string;
}

export interface ResetPasswordConfirmModel {
  readonly confirmId: string;
  readonly password: string;
}
