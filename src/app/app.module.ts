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
import {GalleryComponent} from './gallery/gallery.component';
import {FormsModule} from '@angular/forms';
import {MaterialDesignModule} from './config/material-design.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { FileComponent } from './gallery/file/file.component';
import {AppRoutingModule} from './config/routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    FileComponent
  ],
  imports: [
    MaterialDesignModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    AppRoutingModule,
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
