import { IEnvironment } from './i-environment';

export const environment: IEnvironment = {
  apiGatewayHostUrl: window['env'] && window['env']['apiGatewayHostUrl'] ? window['env']['apiGatewayHostUrl'] : 'http://localhost:8080',
  entryHostUrl: window['env'] && window['env']['entryHostUrl'] ? window['env']['entryHostUrl'] : '',
  pushHostUrl: window['env'] && window['env']['pushHostUrl'] ? window['env']['pushHostUrl'] : '',
  uaaHostUrl: window['env'] && window['env']['uaaHostUrl'] ? window['env']['uaaHostUrl'] : '',
  production: false
};
