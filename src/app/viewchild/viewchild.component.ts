import { Component, ElementRef, ViewChild, AfterViewInit, HostListener } from '@angular/core';
import { ObService } from '../ObService/ob.service';

@Component({
  selector: 'view-child',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})

export class ViewChildComponent implements AfterViewInit {

  public dishname;
  public alldishname: any = ["Veg Kolhapuri", "Chole", "Chiken Tandoori", "Kabab", "Thali", "Veg Thali"]
  public choosen: any;
  public parentdata:any = "blue";
  public obdata: any;
  public obdatasecond: Array<any> = [];
  public selectedrow;
  public demotemplate = false;
  constructor(private observice: ObService, e: ElementRef) {
    this.observice.getAll().subscribe((res) => {
      this.obdata = res;
    })
  }
  @ViewChild('dishRef',{static:true})  dishRefname: ElementRef;

  ngAfterViewInit(): void {
    this.dishRefname.nativeElement.focus();
  }

  tableselectedrowclick(selectedrow , i) {
    console.log(selectedrow)
    //this.e.nativeElement
    this.selectedrow = selectedrow
    this.index = i;
  }

  public index;
  getrow() {
    this.obdatasecond.push(this.selectedrow)
    // this.obdata.splice(this.selectedrow,1,0)
    // for (let item of this.obdata) {
    //   if (item.id === this.selectedrow.id) {
       
    //     console.log("match")
    //   }
    // }

    this.obdata.splice(this.index, 1,0)
  }

  removeitem(item,i){
   this.obdatasecond.splice(i,1)
   this.obdata.push(item)
  }

  Submitdishdetails(formRef) {
    console.log(formRef)
  }
}