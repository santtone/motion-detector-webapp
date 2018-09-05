import {Injectable} from '@angular/core';
import {FileHttpService} from './file-http.service';
import {Observable, of} from 'rxjs';
import {File} from '../file/file';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  files: File[];

  constructor(private httpService: FileHttpService) {
    this.files = [];
  }

  getFiles(reload?: boolean): Observable<File[]> {
    if (!reload && this.files.length > 0) {
      return of(this.files);
    }
    return this.httpService.get().pipe(map((files: File[]) => {
      this.files = files;
      return files;
    }));
  }

  getFileById(id: string): Observable<File> {
    const found = this.files.find((f: File) => f.id === id);
    if (!found) {
      return this.getFiles().pipe(map((files: File[]) => {
        return files.find((f: File) => f.id === id);
      }));
    }
    return of(found);
  }

  deleteAllFiles(): Observable<any> {
    return this.httpService.deleteAll();
  }
}
