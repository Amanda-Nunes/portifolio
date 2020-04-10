import { Validators, FormGroup } from '@angular/forms';
import { Contact } from 'src/app/shared/models/contact';
import { FormGroupCore } from '../../core/forms/FormGroupCore';


export class FormValidator extends FormGroupCore<Contact> {

  constructor() {
    super();
  }

  toForm(model: Contact) {
    let form = this.formBuilder.group({

        username: [model.username, [Validators.required, Validators.pattern('[^\\d ][^\\d]+'), Validators.maxLength(60), Validators.minLength(3)]],
        subject: [model.subject, [Validators.required, Validators.maxLength(60), Validators.minLength(3)]],
        message: [model.message, [Validators.required, Validators.maxLength(1500), Validators.minLength(3)]],
        email: [model.email,{
          validators: [Validators.required, Validators.email, Validators.maxLength(100)],
          updateOn: 'blur'
        }],
    });
    return form;
  }

  fromForm(model: Contact, form: FormGroup) {
    return Object.assign(model, form.getRawValue());
  }
}
