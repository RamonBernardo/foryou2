import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GodofwarPage } from './godofwar';

@NgModule({
  declarations: [
    GodofwarPage,
  ],
  imports: [
    IonicPageModule.forChild(GodofwarPage),
  ],
})
export class GodofwarPageModule {}
