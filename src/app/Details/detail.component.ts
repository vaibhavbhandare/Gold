import { Component } from "@angular/core";
import { ObService } from "../ObService/ob.service"
import { ActivatedRoute } from "@angular/router";
import {Router} from '@angular/router';

@Component({
    selector: "my-detail",
    templateUrl: "./detail.component.html",
    styleUrls: ['./detail.component.css']
})
export class DetailComponent {
    data = [];
    selectedid;
    constructor(private activatedroute: ActivatedRoute, private service: ObService, private router:Router) {
        activatedroute.params.subscribe((params) => {
            this.selectedid = Number(params['xyz']);
        })
        service.getAll().subscribe((res) => {
            this.data = res
        });
    }
   
    onBack()
    {
   this.router.navigate(["/observable"])
    }

    onPrevious()
    {
        this.router.navigate(["/detail",this.selectedid-1])
    }

    onNext()
    {
        this.router.navigate(["/detail",this.selectedid+1])
    }

}