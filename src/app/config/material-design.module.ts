import {NgModule} from '@angular/core';
import {
  MatButtonModule, MatCardModule,
  MatCommonModule, MatDialogModule,
  MatGridListModule,
  MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatProgressBarModule,
  MatProgressSpinnerModule, MatSelectModule,
  MatSidenavModule, MatSliderModule, MatSlideToggleModule,
  MatToolbarModule
} from '@angular/material';
import {LayoutModule} from '@angular/cdk/layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

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
  MatListModule,
  MatDialogModule,
  MatMenuModule,
  MatSlideToggleModule,
  MatSelectModule,
  MatSliderModule
];

@NgModule({
  imports: modules,
  exports: modules,
  declarations: []
})
export class MaterialDesignModule {
}
