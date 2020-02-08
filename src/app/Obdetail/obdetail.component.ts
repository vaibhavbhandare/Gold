import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ObService } from "../ObService/ob.service";
import { Router } from "@angular/router";

@Component({
    selector: "my-obdetail",
    templateUrl: "./obdetail.component.html",
    styleUrls: ["./obdetail.component.css"]
})
export class ObdetailComponent {
    obarr = [];
    obselectedid;
    
    constructor(private activatedroute: ActivatedRoute, private service: ObService, private router: Router) {

        this.activatedroute.params.subscribe((params) => {
            this.obselectedid = Number(params['pqr']);

        })
        service.getAll().subscribe((data) => {
            this.obarr = data;

        })
    }

    onSave(value: any) {
        this.service.putcustomer(value).subscribe((res) => {
            this.obarr = res;
        })
        
        this.router.navigate(["/observable"]);
      
    }

}