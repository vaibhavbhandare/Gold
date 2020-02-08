import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-mdf',
  templateUrl: './mdf.component.html',
  styleUrls: ['./mdf.component.css']
})
export class MDFComponent {

  empform = new FormGroup({

    name: new FormControl("",[Validators.required,Validators.minLength(4),Validators.maxLength(10)]),
    password: new FormControl(''),
    confirmpassword: new FormControl(''),
    zipcode: new FormControl('')
  });

}
