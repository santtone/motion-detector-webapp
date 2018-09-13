import {environmentBase} from './environment-base';

export const environment = Object.assign({
  production: false,
  streamProxyUrl: 'https://localhost:44333/stream',
  endpointUrl: 'https://localhost:44333/api',
}, environmentBase);
