import { SignInModel } from './sign-in.model';
import { OrganizationType } from './user.model';

export interface SignUpModel extends SignInModel {
  readonly organizationTypeName: OrganizationType;
  readonly firstName: string;
  readonly surname: string;
}
