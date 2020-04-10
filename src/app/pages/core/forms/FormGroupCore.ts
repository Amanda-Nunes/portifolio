
import { FormGroup, FormBuilder, FormArray } from "@angular/forms";
import { FormGroupInterface } from './FormGroupInterface';

export abstract class FormGroupCore<Model> implements FormGroupInterface<Model> {
  formBuilder = new FormBuilder();

  abstract toForm(model: Model, options?: any);

  fromForm(model: Model, form: FormGroup) {
    return Object.assign(model, form.value);
  }

  zerarFormArray(formArray: FormArray) {
    while (formArray.length != 0) {
      formArray.removeAt(0);
    }
  }

  criarFormArray(itens: any[], validators = [], funcaoGeradora: (item: Model) => FormGroup) {
    if (!itens || (itens && !itens.length)) {
      return this.formBuilder.array([], validators);
    }
    return new FormArray(itens.map(item => funcaoGeradora(item), validators));
  }

}
