const appVersion: string = require('../../package.json').version;

export const environmentBase = {
  tokenKey: 'md-token',
  version: appVersion,
};
