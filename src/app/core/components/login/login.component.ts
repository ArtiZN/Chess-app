import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '@core/mock-backend/services/auth.service';
import { LogInFormGroup } from '@core/models/login.form-group';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: LogInFormGroup;
  errorMessage: string;

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    this.form = new LogInFormGroup();
    document.body.style.backgroundColor = '#f6f6f6';
  }

  login(form: FormGroup) {
    if (form.valid) {
      const { username, password } = form.value;
      this.authService.login(username, password)
        .subscribe(response => {
          console.log('login is successful');
        });
    }
  }
}
