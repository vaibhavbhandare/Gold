import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ObservableComponent } from './observable/observable.component';
import { TdfComponent } from './TDF/tdf.component';
import { MDFComponent } from './mdf/mdf.component';
import { DirectiveComponent } from './EqDirectiveComponent/directive.component';
import { ParentComponentPC } from './P-Cparent/parent.component';
import { ParentComponentCP } from './C-Pparent/parent.component';
import { TdfNewComponent } from './TDFNEW/tdfnew.component';
import { ViewChildComponent } from './viewchild/viewchild.component';
import { NgContainerComponent } from './ngTeml-ngCont/ngContainer.component';
import { PassTemplate } from './PassInOfTel/passinTel.component';
import { ObdetailComponent } from './Obdetail/obdetail.component';
import { DetailComponent } from './Details/detail.component';
import { PageNotFound } from './PageNotFound/page.component';
import { ChildComponentPC } from './P-C/child.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ObService } from './ObService/ob.service';
import { ViewChildDirectiveComponent } from './Directive/viewchild.directive';
import { SearchPipeComponent } from './SearchPipe/search.component';
import { ColorDirective } from './Directive/color.directive';
import { ChildComponentCP } from './C-Pchild/child.component';
import { FootballService } from './football.service';
import { FootComponentComponent } from './foot-component/foot-component.component';
import { FootdetailComponent } from './footdetail/footdetail.component';
import { FoorPipeComponent } from './foot-component/foot.pipe';

const routes: Routes = [
  {path:'',redirectTo:'/home', pathMatch:'full'},
  {path:'home' , component:HomeComponent},
  {path:'obser', component:ObservableComponent},
  {path:'tdf' , component:TdfComponent},
  {path:'mdf',component:MDFComponent},
  {path:'dircomponent',component:DirectiveComponent},
  {path:'PC',component:ParentComponentPC},
  {path:'CP',component:ParentComponentCP},
  {path:'newtdf',component:TdfNewComponent},
  {path:'viewchild',component:ViewChildComponent},
  {path:'ngContainer',component:NgContainerComponent},
  {path:'passtel',component:PassTemplate},
  {path:'obdetail/:pqr' , component:ObdetailComponent},
  {path:'detail/:xyz' , component:DetailComponent},
  {path:'observable' , component:ObservableComponent},
  {path:'footdetail/:abc', component:FootdetailComponent},
  {path:'foot' , component:FootComponentComponent},
 
  {
    path:'skill-list',
    loadChildren:() => import('./skill-m/skill-m.module').then(m=> m.SkillMModule)
   //loadChildren:'./skill-m/skill-m.module#SkillMModule'
  },
  {
    path:'speak-factory',
    loadChildren:() => import('./speak-m/speak-m.module').then(m=> m.SpeakMModule)
  },
  {path:'**',component:PageNotFound}
];

@NgModule({
  declarations:[
    //AppComponent,
   // FooterComponent,
   // HeaderComponent,
    HomeComponent,
    ChildComponentCP,
    ParentComponentCP,
    DirectiveComponent,
    DetailComponent,
    ColorDirective,
    MDFComponent,
    NgContainerComponent,
    ObdetailComponent,
    ObservableComponent,
    ChildComponentPC,
    ParentComponentPC,
    PageNotFound,
    PassTemplate,
    SearchPipeComponent,
    TdfComponent,
    TdfNewComponent,
    ViewChildComponent,
    ViewChildDirectiveComponent
    
  ],
  imports: [RouterModule.forRoot(routes),
    FormsModule,ReactiveFormsModule,CommonModule,FormsModule,HttpClientModule
  ],
  providers:[ObService,FootballService],
  exports: [RouterModule]
})
export class AppRoutingModule { }
