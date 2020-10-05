
import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  amt:boolean;
  public eoInfoForm: FormGroup;
  constructor(private FB: FormBuilder) { }
  
  ngOnInit() {
    this.initEoForm();
  }

  initEoForm() {
    this.eoInfoForm = this.FB.group({
      amount: ['', Validators.required],
    });
  }  

  public get eoInfo() {
    if (this.eoInfoForm) {
      return this.eoInfoForm.controls;
    }
  }

}
