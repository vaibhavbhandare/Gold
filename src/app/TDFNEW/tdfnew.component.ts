import { Component } from "@angular/core";

@Component({
    selector:"my-newtdf",
    templateUrl:"./tdfnew.component.html",
    styleUrls:["./tdfnew.component.css"]
})
export class TdfNewComponent
{
    role:any=["Select Your Position","Angular Developer", "Node js Developer","React Developer", "Software Developer","php Developer"];
    
    onSubmit(value:any)
    {
        console.log(value);
        
    }

}