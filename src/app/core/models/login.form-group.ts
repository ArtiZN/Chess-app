import { FormGroup, Validators } from '@angular/forms';

import { CommonFormControl } from './common.form';

export class LogInFormGroup extends FormGroup {

  constructor() {
    super({
      username: new CommonFormControl('Username', 'text', 'username', '',
        Validators.compose([
          Validators.required
        ])),
      password: new CommonFormControl('Password', 'password', 'password', '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30)
        ]))
    });
  }

  get LogInControls(): CommonFormControl[] {
    return Object.keys(this.controls).map(k => this.controls[k] as CommonFormControl);
  }

  getFormValidationMessages(form: any): string[] {
    const messages: string[] = [];
    this.LogInControls.forEach(c => c.getValidationMessages().forEach(m => messages.push(m)));
    return messages;
  }
}
