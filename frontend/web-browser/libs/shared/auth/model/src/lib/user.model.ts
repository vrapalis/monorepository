export interface UserModel {
  readonly email: string;
  readonly account: any;
  readonly info: {
    organizationTypeName: OrganizationType,
    surname: string,
    firstName: string,
    age: number,
  };
  readonly roles: any;
}

export type OrganizationType = 'company' | 'private';
