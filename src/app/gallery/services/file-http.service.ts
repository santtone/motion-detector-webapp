import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {File} from '../file/file';
import {map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileHttpService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.endpointUrl}/files`;
  }

  get(): Observable<File[]> {
    return this.http.get(this.url).pipe(
      map((response: File[]) =>
        response.map((f: File) => Object.assign(new File(), f))
      )
    );
  }
}
