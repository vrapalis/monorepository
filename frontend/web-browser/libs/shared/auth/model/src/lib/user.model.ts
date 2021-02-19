export interface UserModel {
  readonly email: string;
  readonly account: any;
  readonly info: any;
  readonly roles: any;
}

export type OrganizationType = 'Company' | 'Privat';
