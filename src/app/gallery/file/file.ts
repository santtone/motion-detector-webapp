export class File {
  id: string;
  name: string;
  thumbnailLink: string;
  link: string;
  date: Date;


  constructor(id?: string, name?: string, thumbnailLink?: string, link?: string, date?: Date) {
    this.id = id;
    this.name = name;
    this.thumbnailLink = thumbnailLink;
    this.link = link;
    this.date = date;
  }
}
