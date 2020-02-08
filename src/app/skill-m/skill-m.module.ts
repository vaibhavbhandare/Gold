import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillMRoutingModule } from './skill-m-routing.module';
import { SkilllistComponent } from './skilllist/skilllist.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [SkilllistComponent],
  imports: [
    CommonModule,
    SkillMRoutingModule,
    RouterModule
  ]
})
export class SkillMModule { }
