import {NgModule} from '@angular/core';
import {MatButtonModule, MatCommonModule, MatIconModule, MatSidenavModule, MatToolbarModule} from '@angular/material';

const modules = [
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatCommonModule
];

@NgModule({
  imports: modules,
  exports: modules,
  declarations: []
})
export class MaterialDesignModule {
}
