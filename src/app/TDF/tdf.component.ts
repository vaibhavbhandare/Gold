import { Component } from "@angular/core";


@Component({
    selector:"my-tdf",
    templateUrl:"./tdf.component.html",
    styleUrls:['./tdf.component.css']
})
export class TdfComponent
{

    onCreate(give:any)
    {
       console.log(give)
    }
}