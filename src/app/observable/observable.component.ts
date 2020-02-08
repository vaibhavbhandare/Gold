import { Component } from '@angular/core';
import { ObService } from '../ObService/ob.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent {
  employee: any = [];
  customer = {}
  usearch;
  popup = false;
  constructor(private service: ObService, private router: Router) {
    
    this.service.getAll().subscribe((data)=>{
      this.employee = data
    })
  }

  onFormSubmit(value: any) {
    this.customer = value;  // put values in object

    this.popup = true;
    this.service.postCustomer(this.customer).subscribe((res) => {
      this.employee.splice(0, 0, res)           //  add data at zero index
      window.location.reload();
    })
  }

  onDelete(id: any) {
    if (confirm("Are You Shure want to delete data ?")) {
      this.service.deleteCustomer(id).subscribe((res) => {
        // this.employee.splice(res,1);
        this.employee = res;
        window.location.reload();
      })
    }
  }

  onUpdate(id: any) {
    this.router.navigate(["/obdetail", id])
  }

  onView(id: any) {
    this.router.navigate(["/detail", id])
  }
}












