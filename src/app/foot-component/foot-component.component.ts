import { Component, OnInit } from '@angular/core';
import { FootballService } from '../football.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-foot-component',
  templateUrl: './foot-component.component.html',
  styleUrls: ['./foot-component.component.css']
})
export class FootComponentComponent implements OnInit {
  public footdata: any;
  public id: any;
  public agenumber: any = []
  public datasearch:any="";
  constructor(private footservice: FootballService ,
              private router:Router) {
    this.footservice.getAllData().subscribe((data) => {
      this.footdata = data
      console.log(this.footdata);

    })

  }

  ngOnInit() {
    for (let i = 0; i <= 10; i++) {
      this.agenumber.push(i.toString());
    }
  }

  onSubmit(from) {
    console.log(from.value);
    this.footservice.postData(from.value).subscribe((data) => { this.footdata = data })

  }

  delete(id) {
    this.footservice.deletedata(id).subscribe(data => { this.footdata = data })
   // this.router.navigate(['/observable'])
  }

  showdata(id){
    this.router.navigate(['/footdetail',id])
  }
}
