import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpeakMRoutingModule } from './speak-m-routing.module';
import { SpeakFactoryComponent } from './speak-factory/speak-factory.component';
import { PowerComponent } from './power/power.component';


@NgModule({
  declarations: [SpeakFactoryComponent, PowerComponent],
  imports: [
    CommonModule,
    SpeakMRoutingModule
  ]
})
export class SpeakMModule { }
