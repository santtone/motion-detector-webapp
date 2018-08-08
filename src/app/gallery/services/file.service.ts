import {Injectable} from '@angular/core';
import {FileHttpService} from './file-http.service';
import {Observable} from 'rxjs';
import {File} from '../file';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private httpService: FileHttpService) {
  }

  getFiles(): Observable<File[]> {
    return this.httpService.get();
  }
}
