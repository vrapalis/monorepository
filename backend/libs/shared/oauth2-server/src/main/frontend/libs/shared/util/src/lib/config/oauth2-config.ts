import { AuthConfig } from 'angular-oauth2-oidc';

export const OAUTH2_CODE_FLOW_CONFIG: AuthConfig = {
  // Url of the Identity Provider
  // issuer: 'http://127.0.0.1:8080',
  // issuer: 'https://vrapalis-oauth2.ddns.net',
  issuer: 'https://vrapalis-oauth2.ddns.net/login',
  useHttpBasicAuth: true,
  dummyClientSecret: 'secret',

  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin,
  oidc: true,

  // The SPA's id. The SPA is registerd with this id at the auth-server
  // clientId: 'server.code',
  clientId: 'client',

  // Just needed if your auth server demands a secret. In general, this
  // is a sign that the auth server is not configured with SPAs in mind
  // and it might not enforce further best practices vital for security
  // such applications.
  // dummyClientSecret: 'secret',

  responseType: 'code',
  requireHttps: false,

  // set the scope for the permissions the client should request
  // The first four are defined by OIDC.
  // Important: Request offline_access to get a refresh token
  // The api scope is a usecase specific one
  // scope: 'openid',
  scope: 'read',

  showDebugInformation: true
};
