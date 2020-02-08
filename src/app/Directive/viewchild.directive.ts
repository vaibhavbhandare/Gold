import { Directive, Input, HostListener, ElementRef, HostBinding } from "@angular/core";

@Directive({
    selector: "[welcome]"
})

export class ViewChildDirectiveComponent {

    constructor(private e1: ElementRef) {
        this.e1.nativeElement.style.backgroundColor = "DodgerBlue"
    }
    @Input('welcome') welcomeColor: any;

    //@HostBinding('style.border') border:string;
    @HostBinding('style.border') border:string;

    @HostListener('mouseenter') onMouseEnter() {
        this.e1.nativeElement.style.backgroundColor=this.welcomeColor;
        this.border = '5px solid black'
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.e1.nativeElement.style.backgroundColor = null;
        this.border = null;
    }
}