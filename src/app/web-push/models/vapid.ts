export class Vapid {
  subject: string;
  publicKey: string;
  privateKey: string;

  constructor(subject?: string, publicKey?: string, privateKey?: string) {
    this.subject = subject;
    this.publicKey = publicKey;
    this.privateKey = privateKey;
  }
}
