import {Routes} from '@angular/router';
import {GalleryComponent} from '../../gallery/gallery.component';
import {FileComponent} from '../../gallery/file/file.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/gallery',
    pathMatch: 'full'
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
