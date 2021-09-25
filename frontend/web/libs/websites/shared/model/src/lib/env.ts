export interface IBaseEnv {
  production: boolean;
  basePath: string;
}

export interface IWebsiteStrapiEnv extends IBaseEnv {
  strapiPath: string;
}
