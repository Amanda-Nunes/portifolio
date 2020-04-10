import { Component, OnInit } from '@angular/core';
import {  FormValidator } from './form-validator';
import { Contact } from 'src/app/shared/models/contact';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  formValidator: any;

  constructor() {

  }

  ngOnInit() {
    this.formValidator = new FormValidator().toForm(new Contact());
  }

}
