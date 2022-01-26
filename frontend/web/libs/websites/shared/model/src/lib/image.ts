import {IBase} from "./base";

export interface IImage extends IBase {
  name: string;
  alternativeText?: string;
  caption?: string;
  width?: number;
  height?: number;
  formats?: any;
  url: string;
}
