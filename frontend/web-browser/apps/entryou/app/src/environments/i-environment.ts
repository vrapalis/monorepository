import { IAuthEnvironment } from '@web-browser/shared/auth/model';
import { IEntryouEnvironment } from '@web-browser/entryou/model';

export interface IEnvironment extends IAuthEnvironment, IEntryouEnvironment{
  production: boolean;
}
