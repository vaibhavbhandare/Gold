import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector:"my-child1",
    templateUrl:"./child.component.html",
    styleUrls:["./child.component.css"]
})
export class ChildComponentCP
{
    uid:any;

    @Output()  MobEvent = new EventEmitter<any>()

   onCheck()
   {
     this.MobEvent.emit(this.uid)
   }

}