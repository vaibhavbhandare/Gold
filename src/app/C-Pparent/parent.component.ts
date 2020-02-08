import { Component } from "@angular/core";
import {ObService} from "../ObService/ob.service";

@Component({
    selector:"my-parent2",
    templateUrl:"./parent.component.html",
    styleUrls:["./parent.component.css"]
})
export class ParentComponentCP
{
   pdata=[];
   getid:any;
    constructor(private service:ObService){
     service.getAll().subscribe((res)=>{
         this.pdata=res;
     })
    }

    onGetEvent(model)
    {
      this.getid=model
    }

}