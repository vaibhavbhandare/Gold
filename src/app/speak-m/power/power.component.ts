
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BigService } from '../Speak-Services/speak.service';
import { ObService } from 'src/app/ObService/ob.service';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit, AfterViewInit {

  public powerdata: any;
  constructor(private speakService: BigService,
    private obse: ObService) {
  }

  ngOnInit() {
    this.obse.getAll().subscribe((data)=>{
      this.powerdata = data
    })
    console.log(this.powerdata);
  }
  

  ngAfterViewInit() {}
    

}
