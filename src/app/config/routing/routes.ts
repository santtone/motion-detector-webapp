import {Routes} from '@angular/router';
import {GalleryComponent} from '../../gallery/gallery.component';
import {FileComponent} from '../../gallery/file/file.component';
import {CameraComponent} from '../../camera/camera.component';
import {LoginComponent} from '../../user/login/login.component';
import {AppLayoutComponent} from '../../app-layout/app-layout.component';
import {SettingsComponent} from '../../settings/settings.component';

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
    path: 'md',
    component: AppLayoutComponent,
    children: [
      {
        path: 'camera',
        component: CameraComponent,
        data: {
          reuse: true
        }
      },
      {
        path: 'settings',
        component: SettingsComponent
      },
      {
        path: 'gallery',
        component: GalleryComponent
      },
      {
        path: 'gallery/:id',
        component: FileComponent
      }
    ]
  }
];
