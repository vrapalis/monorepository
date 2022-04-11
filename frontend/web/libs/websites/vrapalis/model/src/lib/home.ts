import {IBase, IImage} from "@web/websites/shared/model";

export interface IProject extends IBase {
  linkUrl: string;
  picture: IImage;
}

export interface IProjects extends IBase {
  title: string;
  projects: Array<IProject>;
}

export interface IHome extends IBase {
  profile: IImage;
  profileDescription: string;
  projects: IProjects;
}

export interface IMore {
  readonly title: string;
  readonly subTitle: string;
  readonly text: string;
  readonly imageUrl: string;
}

export interface IService {
  readonly title: string;
  readonly subTitle: string;
  readonly text: string;
  readonly imageUrl: string;
}
