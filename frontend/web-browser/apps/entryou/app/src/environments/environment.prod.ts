import { IEnvironment } from './i-environment';

export const environment: IEnvironment = {
  entryHostUrl: window['env'] && window['env']['entryHostUrl'] ? window['env']['entryHostUrl'] : '',
  pushHostUrl: window['env'] && window['env']['pushHostUrl'] ? window['env']['pushHostUrl'] : '',
  uaaHostUrl: window['env'] && window['env']['uaaHostUrl'] ? window['env']['uaaHostUrl'] : '',
  production: true
};
