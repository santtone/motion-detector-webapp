export class File {
  id: string;
  name: string;
  thumbnailLink: string;
  link: string;


  constructor(id?: string, name?: string, thumbnailLink?: string, link?: string) {
    this.id = id;
    this.name = name;
    this.thumbnailLink = thumbnailLink;
    this.link = link;
  }
}
