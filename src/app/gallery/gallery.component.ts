import {Component, OnInit, ViewChild} from '@angular/core';
import {FileService} from './services/file.service';
import {File} from './file/file';
import {BreakpointObserver, Breakpoints, MediaMatcher} from '@angular/cdk/layout';
import {Router} from '@angular/router';
import {groupBy as _groupBy} from 'lodash';
import {ToolbarService} from '../app-layout/toolbar/toolbar.service';
import {ToolbarOptions} from '../app-layout/toolbar/toolbar-options';
import {finalize} from 'rxjs/operators';
import {ToolbarAction} from '../app-layout/toolbar/toolbar-action';
import {MatMenu, MatMenuTrigger} from '@angular/material';

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

  @ViewChild('galleryMenu') menu: MatMenu;

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
    this.toolbar.setToolbarOptions(new ToolbarOptions(false, 'Gallery', [
      new ToolbarAction(this.reloadFiles.bind(this), 'refresh'),
      new ToolbarAction(() => {
      }, 'more_vert', this.menu)
    ]));
    this.reloadFiles();
  }

  onFileSelect(file: File) {
    this.router.navigate(['/md/gallery', file.id]);
  }

  reloadFiles() {
    this.isLoading = true;
    this.fileService.getFiles(true)
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

  deleteFiles() {
    this.fileService.deleteAllFiles().subscribe(() => this.reloadFiles());
  }

}
