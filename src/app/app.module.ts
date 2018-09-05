import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {WebPushModule} from './web-push/web-push.module';
import {WebPushService} from './web-push/services/web-push.service';
import {FileService} from './gallery/services/file.service';
import {FileHttpService} from './gallery/services/file-http.service';
import {GalleryComponent} from './gallery/gallery.component';
import {FormsModule} from '@angular/forms';
import {MaterialDesignModule} from './config/material-design.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FileComponent} from './gallery/file/file.component';
import {AppRoutingModule} from './config/routing/app-routing.module';
import {CameraComponent} from './camera/camera.component';
import {ToolbarComponent} from './app-layout/toolbar/toolbar.component';
import {SafeUrlPipe} from './utils/safe-url.pipe';
import {UserModule} from './user/user.module';
import {HttpAuthInterceptor} from './authentication/http-auth-interceptor';
import {AppLayoutComponent} from './app-layout/app-layout.component';
import {CameraService} from './camera/services/camera.service';
import {CameraHttpService} from './camera/services/camera-http.service';
import {MessageDialogComponent} from './dialogs/message-dialog/message-dialog.component';
import {DialogService} from './dialogs/dialog.service';
import {HttpErrorInterceptor} from './config/http-error-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    FileComponent,
    CameraComponent,
    ToolbarComponent,
    SafeUrlPipe,
    AppLayoutComponent,
    MessageDialogComponent
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
    WebPushModule,
    UserModule
  ],
  providers: [
    WebPushService,
    FileService,
    FileHttpService,
    CameraService,
    CameraHttpService,
    DialogService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpAuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent],
  entryComponents: [MessageDialogComponent]
})
export class AppModule {
}
