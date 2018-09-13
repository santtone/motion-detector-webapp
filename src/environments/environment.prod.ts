import {environmentBase} from './environment-base';

export const environment = Object.assign({
  production: true,
  streamProxyUrl: 'https://remanent-liger-7850.dataplicity.io/stream',
  endpointUrl: 'https://remanent-liger-7850.dataplicity.io/api',
}, environmentBase);
