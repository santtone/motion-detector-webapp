import {Component, OnInit} from '@angular/core';
import {FileService} from '../services/file.service';
import {ActivatedRoute} from '@angular/router';
import {File} from './file';

@Component({
  selector: 'md-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {

  file: File;
  isLoading: boolean;

  constructor(private route: ActivatedRoute, private fileService: FileService) {
    this.isLoading = true;
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.fileService.getFileById(id).subscribe((file: File) => {
      this.file = file;
    });
  }

}
