import {NgModule} from '@angular/core';
import {
  MatButtonModule, MatCardModule,
  MatCommonModule,
  MatGridListModule,
  MatIconModule, MatInputModule, MatListModule, MatProgressBarModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import {LayoutModule} from '@angular/cdk/layout';

const modules = [
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatCommonModule,
  MatGridListModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  LayoutModule,
  MatCardModule,
  MatInputModule,
  MatListModule
];

@NgModule({
  imports: modules,
  exports: modules,
  declarations: []
})
export class MaterialDesignModule {
}
