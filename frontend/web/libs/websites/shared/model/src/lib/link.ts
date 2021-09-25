import {IBase} from "./base";

export interface ISideLink extends IBase {
  links: Array<IBootstrapIconLink>;
}

export interface IBootstrapIconLink extends IBase {
  className: string;
  ariaLabel: string;
  url: string;
  color: string;
}

