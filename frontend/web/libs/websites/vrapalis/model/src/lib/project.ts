export interface IProjectsPage {
  readonly projects: {
    readonly title: string;
    readonly backend: IProjectBlock;
    readonly frontend: IProjectBlock;
  }
}

export interface IProjectBlock {
  readonly title: string;
  readonly projects: Array<ICreatedProject>;
}

export interface ICreatedProject {
  readonly title: string;
  readonly subTitle: string;
  readonly text: string;
  readonly btnTxt: string;
  readonly link: string;
  readonly img: string;
}
