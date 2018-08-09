import {Component, OnInit} from '@angular/core';
import {FileService} from './services/file.service';
import {File} from './file/file';
import {BreakpointObserver, Breakpoints, MediaMatcher} from '@angular/cdk/layout';
import {Router} from '@angular/router';
import {groupBy as _groupBy} from 'lodash';

@Component({
  selector: 'md-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  files: File[];
  groupedFiles: any;
  columnCount: number;
  groupDates: any;

  constructor(private router: Router, private breakpointObserver: BreakpointObserver, private mediaMatcher: MediaMatcher,
              private fileService: FileService) {
    this.files = [];
    this.columnCount = 1;
    breakpointObserver.observe([
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large
    ]).subscribe(result => {
      if (breakpointObserver.isMatched(Breakpoints.XSmall)) {
        this.columnCount = 2;
      } else if (breakpointObserver.isMatched(Breakpoints.Small)) {
        this.columnCount = 3;
      } else if (breakpointObserver.isMatched(Breakpoints.Medium)) {
        this.columnCount = 4;
      } else if (breakpointObserver.isMatched(Breakpoints.Large)) {
        this.columnCount = 5;
      } else if (breakpointObserver.isMatched(Breakpoints.XLarge)) {
        this.columnCount = 6;
      }
    });
  }

  ngOnInit() {
    this.fileService.getFiles().subscribe((files: File[]) => {
      this.files = files;
      this.groupedFiles = _groupBy(this.files, (f: File) => {
        const d = new Date(f.date);
        return new Date(d.getFullYear(), d.getMonth(), d.getDate());
      });
      this.groupDates = Object.keys(this.groupedFiles);
      console.log(this.groupDates);
    });
  }

  onFileSelect(file: File) {
    this.router.navigate(['/gallery', file.id]);
  }

}
