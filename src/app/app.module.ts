import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {WebPushModule} from './web-push/web-push.module';
import {WebPushService} from './web-push/services/web-push.service';
import {FileService} from './gallery/services/file.service';
import {FileHttpService} from './gallery/services/file-http.service';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    WebPushModule
  ],
  providers: [
    WebPushService,
    FileService,
    FileHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
