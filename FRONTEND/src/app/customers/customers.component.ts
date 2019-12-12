import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {

  formValidated: boolean = false;
  data: FormGroup;

  constructor() { }

  onFormValidated(data: FormGroup){
    this.data = data;
    this.formValidated = true;
}

}
