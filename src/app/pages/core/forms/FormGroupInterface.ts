import { FormGroup } from "@angular/forms";

export interface FormGroupInterface<Model> {
  toForm(model: Model): FormGroup;

	fromForm(model: Model, form: FormGroup): Model;
}
