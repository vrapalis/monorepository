interface ServerResponse {
  readonly msg: string;
}

export interface ServerResponseModel extends ServerResponse {
  readonly detailedErrorMsg?: string;
}

export interface SignInSuccessResponse extends ServerResponse {
  readonly jwt: string;
}
