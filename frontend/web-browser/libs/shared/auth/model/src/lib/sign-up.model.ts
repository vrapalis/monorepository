import { SignInModel } from './sign-in.model';
import { OrganizationType } from './user.model';

export interface SignUpModel extends SignInModel {
  readonly organizationType: OrganizationType;
  readonly firstName: string;
  readonly surname: string;
}
