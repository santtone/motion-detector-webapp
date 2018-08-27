import {Component, OnInit} from '@angular/core';
import {FileService} from './services/file.service';
import {File} from './file/file';
import {BreakpointObserver, Breakpoints, MediaMatcher} from '@angular/cdk/layout';
import {Router} from '@angular/router';
import {groupBy as _groupBy} from 'lodash';
import {ToolbarService} from '../toolbar/toolbar.service';
import {ToolbarOptions} from '../toolbar/toolbar-options';
import {finalize} from 'rxjs/operators';

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
  isLoading: boolean;

  constructor(private router: Router, private breakpointObserver: BreakpointObserver, private mediaMatcher: MediaMatcher,
              private fileService: FileService, private toolbar: ToolbarService) {
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
    this.toolbar.setToolbarOptions(new ToolbarOptions(true, 'Gallery'));
    this.isLoading = true;
    this.fileService.getFiles()
      .pipe(finalize(() => this.isLoading = false))
      .subscribe((files: File[]) => {
        this.files = files;
        this.groupedFiles = _groupBy(this.files, (f: File) => {
          const d = new Date(f.date);
          return new Date(d.getFullYear(), d.getMonth(), d.getDate());
        });
        this.groupDates = Object.keys(this.groupedFiles);
      });
  }

  onFileSelect(file: File) {
    this.router.navigate(['/gallery', file.id]);
  }

}
