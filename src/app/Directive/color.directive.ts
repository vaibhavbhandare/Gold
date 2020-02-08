import { Directive } from "@angular/core";
import {ElementRef} from "@angular/core";

@Directive({
      selector :"[myColor]"
})

export class ColorDirective
{
    constructor(private e1:ElementRef)
    {
        this.e1.nativeElement.style.background="yellow";
        //e1.nativeElement.style.color="red";
    }
}