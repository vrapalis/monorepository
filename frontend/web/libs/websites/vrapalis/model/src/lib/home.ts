import {IBase, IImage} from "@web/websites/shared/model";

export interface IHome extends IBase{
  profile: IImage;
  profileDescription: string;
}
