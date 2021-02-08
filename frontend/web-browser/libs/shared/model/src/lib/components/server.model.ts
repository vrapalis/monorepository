interface ServerResponse {
  readonly msg: string;
}

export interface ServerErrorResponse extends ServerResponse {
  readonly detailedErrorMsg: string;
}

export interface SignInSuccessResponse extends ServerResponse {
  readonly jwt: string;
}
