import { Component, Input  } from "@angular/core";
import {ObService} from "../ObService/ob.service";


@Component({
    selector:"my-child",
    templateUrl:"./child.component.html",
    styleUrls:["./child.component.css"]
    
})

export class ChildComponentPC
{
   cdata=[];
    @Input() id;
   constructor(private service:ObService){
       service.getAll().subscribe((res)=>{
           this.cdata=res;
       });
   }

}