import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChildComponentCP } from './C-Pchild/child.component';
import { ParentComponentCP } from './C-Pparent/parent.component';
import { DirectiveComponent } from './EqDirectiveComponent/directive.component';
import { DetailComponent } from './Details/detail.component';
import { ColorDirective } from './Directive/color.directive';
import { MDFComponent } from './mdf/mdf.component';
import { NgContainerComponent } from './ngTeml-ngCont/ngContainer.component';
import { ObdetailComponent } from './Obdetail/obdetail.component';
import { ObservableComponent } from './observable/observable.component';
import { ObService } from './ObService/ob.service';
import { ChildComponentPC } from './P-C/child.component';
import { ParentComponentPC } from './P-Cparent/parent.component';
import { PageNotFound } from './PageNotFound/page.component';
import { PassTemplate } from './PassInOfTel/passinTel.component';
import { SearchPipeComponent } from './SearchPipe/search.component';
import { TdfComponent } from './TDF/tdf.component';
import { TdfNewComponent } from './TDFNEW/tdfnew.component';
import { ViewChildComponent } from './viewchild/viewchild.component';
import {CommonModule} from '@angular/common';
import  {FormsModule} from '@angular/forms';
import { ViewChildDirectiveComponent } from './Directive/viewchild.directive';
import { FootComponentComponent } from './foot-component/foot-component.component';
import { FootdetailComponent } from './footdetail/footdetail.component';
import { WorldPipe } from './world.pipe';
import { FoorPipeComponent } from './foot-component/foot.pipe';


const routes:Routes=[
  // {path:'',redirectTo:'/home', pathMatch:'full'},
  // {path:'home' , component:HomeComponent},
  // {path:'obser', component:ObservableComponent},
  // {path:'tdf' , component:TdfComponent},
  // {path:'mdf',component:MDFComponent},
  // {path:'dircomponent',component:DirectiveComponent},
  // {path:'PC',component:ParentComponentPC},
  // {path:'CP',component:ParentComponentCP},
  // {path:'newtdf',component:TdfNewComponent},
  // {path:'viewchild',component:ViewChildComponent},
  // {path:'ngContainer',component:NgContainerComponent},
  // {path:'passtel',component:PassTemplate},
  // {path:'obdetail/:pqr' , component:ObdetailComponent},
  // {path:'detail/:xyz' , component:DetailComponent},
  // {path:'observable' , component:ObservableComponent},
  // {path:'**',component:PageNotFound}
]
@NgModule({
  declarations: [
     AppComponent,
     FooterComponent,
     HeaderComponent,
     FootComponentComponent,
     FootdetailComponent,
     WorldPipe,
     FoorPipeComponent,
    // HomeComponent,
    // ChildComponentCP,
    // ParentComponentCP,
    // DirectiveComponent,
    // DetailComponent,
    // ColorDirective,
    // MDFComponent,
    // NgContainerComponent,
    // ObdetailComponent,
    // ObservableComponent,
    // ChildComponentPC,
    // ParentComponentPC,
    // PageNotFound,
    // PassTemplate,
    // SearchPipeComponent,
    // TdfComponent,
    // TdfNewComponent,
    // ViewChildComponent,
    // ViewChildDirectiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    
    FormsModule,ReactiveFormsModule,CommonModule,FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
