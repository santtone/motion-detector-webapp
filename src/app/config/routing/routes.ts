import {Routes} from '@angular/router';
import {GalleryComponent} from '../../gallery/gallery.component';
import {FileComponent} from '../../gallery/file/file.component';
import {CameraComponent} from '../../camera/camera.component';
import {LoginComponent} from '../../user/login/login.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'camera',
    component: CameraComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'gallery/:id',
    component: FileComponent
  }
];
