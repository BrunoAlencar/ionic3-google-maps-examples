import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Example_1Page } from './example-1';

@NgModule({
  declarations: [
    Example_1Page,
  ],
  imports: [
    IonicPageModule.forChild(Example_1Page),
  ],
})
export class Example_1PageModule {}
