import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpeakFactoryComponent } from './speak-factory/speak-factory.component';
import { PowerComponent } from './power/power.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BigService } from './Speak-Services/speak.service';

const routes: Routes = [
  {
    path:'speak-list',
    component:SpeakFactoryComponent
  },
  {
    path:"power-list",
    component:PowerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),HttpClientModule,FormsModule,CommonModule],
  providers:[],
  exports: [RouterModule]
})
export class SpeakMRoutingModule { }
