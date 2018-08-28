export class Token {

  token: string;
  expiresIn: number;
  expiresOn: Date;
  extExpiresIn: Date;
  notBefore: Date;
  refreshToken: string;
  resource: string;
  tokenType: string;

  constructor(token?: string, expiresIn?: number, expiresOn?: Date, extExpiresIn?: Date, notBefore?: Date,
              refreshToken?: string, resource?: string, tokenType?: string) {
    this.token = token;
    this.expiresIn = expiresIn;
    this.expiresOn = expiresOn;
    this.extExpiresIn = extExpiresIn;
    this.notBefore = notBefore;
    this.refreshToken = refreshToken;
    this.resource = resource;
    this.tokenType = tokenType;
  }
}
