import {Routes} from '@angular/router';
import {GalleryComponent} from '../../gallery/gallery.component';
import {FileComponent} from '../../gallery/file/file.component';
import {CameraComponent} from '../../camera/camera.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/camera',
    pathMatch: 'full'
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
