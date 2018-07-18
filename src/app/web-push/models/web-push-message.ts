export class WebPushMessage {
  payload: string;
  date: Date;

  constructor(payload?: string, date?: Date) {
    this.payload = payload;
    this.date = date;
  }
}
