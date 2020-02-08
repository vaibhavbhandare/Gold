import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from"@angular/router";
import {FootballService} from "../football.service"
import { Router } from '@angular/router';
 

@Component({
  selector: 'app-footdetail',
  templateUrl: './footdetail.component.html',
  styleUrls: ['./footdetail.component.css']
})
export class FootdetailComponent implements OnInit {

  public getid:any;
  public getdata:any=[]
  constructor(private activatedrouter:ActivatedRoute,
             private foorservice:FootballService,
             private router:Router) {
      this.activatedrouter.params.subscribe((id)=>{
        this.getid = Number(id["abc"]);
      })
       this.foorservice.getAllData().subscribe((data)=>{
         this.getdata = data
       })
   }

  ngOnInit() {
  }

  updatedet(form){
    console.log(form.value);
    this.foorservice.updatedata(form.value).subscribe((data)=>{
      this.getdata = data
    })
  }

  cancle(){
    this.router.navigate(['/foot'])
  }

}
