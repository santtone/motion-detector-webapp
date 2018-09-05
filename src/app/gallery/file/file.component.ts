import {Component, OnInit} from '@angular/core';
import {FileService} from '../services/file.service';
import {ActivatedRoute} from '@angular/router';
import {File} from './file';
import {ToolbarService} from '../../app-layout/toolbar/toolbar.service';
import {ToolbarOptions} from '../../app-layout/toolbar/toolbar-options';

@Component({
  selector: 'md-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {

  file: File;
  isLoading: boolean;

  constructor(private route: ActivatedRoute, private toolbar: ToolbarService, private fileService: FileService) {
    this.isLoading = true;
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.toolbar.setToolbarOptions(new ToolbarOptions(true, 'File'));
    this.fileService.getFileById(id).subscribe((file: File) => {
      this.toolbar.setToolbarOptions(new ToolbarOptions(true, file.name));
      this.file = file;
    });
  }

}
