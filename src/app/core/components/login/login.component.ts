import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

import { AuthenticationService } from '@core/mock-backend/services/auth.service';
import { UserService } from '@core/mock-backend/services/user.service';
import { User } from '@core/interfaces/user.interfaces';
import { LogInFormGroup } from '@core/models/login.form-group';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private readonly notifier: NotifierService;

  form: LogInFormGroup;
  errorMessage: string;
  returnUrl: string;

  constructor(
    private authService: AuthenticationService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    notifierService: NotifierService) {
      this.notifier = notifierService;
    }

  ngOnInit() {
    this.form = new LogInFormGroup();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login(form: FormGroup) {
    if (form.valid) {
      const { username, password } = form.value;
      this.authService.login(username, password)
        .subscribe((user: User) => {
          this.userService.updateUser(user);
          this.router.navigate([this.returnUrl]);
        }, err => {
          this.notifier.notify('error', err);
        });
    }
  }
}
