export interface UserInfoModel {
  organizationTypeName: OrganizationType,
  surname: string,
  firstName: string,
  age: number,
  id: number,
  companyName?: string,
}

export interface UserModel {
  readonly email: string;
  readonly account: any;
  readonly info: UserInfoModel;
  readonly roles: any;
}

export type OrganizationType = 'company' | 'private';
