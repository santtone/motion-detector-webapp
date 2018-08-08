import {Component, OnInit} from '@angular/core';
import {FileService} from './services/file.service';
import {File} from './file';

@Component({
  selector: 'md-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  files: File[];

  constructor(private fileService: FileService) {
    this.files = [];
  }

  ngOnInit() {
    this.fileService.getFiles().subscribe((files: File[]) => {
      this.files = files;
    });
  }

}
