import {Component, Input, TemplateRef, OnInit} from "@angular/core";


@Component({
    selector : 'pass-templ',
    templateUrl : 'passinTel.component.html'

})

export class PassTemplate implements OnInit{

    @Input() footballTel : TemplateRef<any>

    ngOnInit(){
        console.log(this.footballTel)
    }
}