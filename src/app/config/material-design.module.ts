import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatCommonModule,
  MatGridListModule,
  MatIconModule,
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
  LayoutModule
];

@NgModule({
  imports: modules,
  exports: modules,
  declarations: []
})
export class MaterialDesignModule {
}
