export class File {
  id: string;
  name: string;
  thumbnailLink: string;
  link: string;
  date: Date;
  mimeType: string;

  constructor(id?: string, name?: string, thumbnailLink?: string, link?: string, date?: Date, mimeType?: string) {
    this.id = id;
    this.name = name;
    this.thumbnailLink = thumbnailLink;
    this.link = link;
    this.date = date;
    this.mimeType = mimeType;
  }
}
