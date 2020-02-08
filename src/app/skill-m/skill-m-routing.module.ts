import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkilllistComponent } from './skilllist/skilllist.component';


const routes: Routes = [
  {
    path:'skills',
    component:SkilllistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillMRoutingModule { }
