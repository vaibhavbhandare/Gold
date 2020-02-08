import { Component, OnInit, ViewChild, TemplateRef, AfterViewInit } from "@angular/core";
import{DomSanitizer} from "@angular/platform-browser"



@Component({
    selector: 'ng-container-example',
    templateUrl: 'ngcontainer.component.html',
    styleUrls: ['ngcontiner.component.css']
})

export class NgContainerComponent implements OnInit , AfterViewInit {

    public logintext = 'Login';
    public SignUptext = 'Sign Up'
    public players = false;
    public totalEstimate = 10;
    public showIframe:boolean;
    public showUrl:any="https://in.linkedin.com/";
    lessons = ['lesson 1','lesson 2','lession 3']

 //  @ViewChild('defaultTabButtons') private defaultTabButtonsTel : TemplateRef<any>

   constructor(private sanitizer:DomSanitizer){

   }

    ngOnInit(){
      // console.log(this.defaultTabButtonsTel)
    }

    ngAfterViewInit(){
        // it can convert unsafe url value to safe value trust and insert in DOM
        this.showUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.showUrl)
    }
    ctx = {
        estimate : this.totalEstimate,
        totalcopy : "World Wide Present"
    }
    cricketPlayers = [
        { name: "vaibhav", Age: 23, Gender: "male" },
        { name: "Atul", Age: 24, Gender: "male" },
        { name: "Vikas", Age: 27, Gender: "male" },
        { name: "Sujit", Age: 28, Gender: "male" },
    ]

    login(){
      console.log(this.logintext)
      this.showIframe = true;
    }

    signup(){
        console.log(this.SignUptext)
    }

    
}
