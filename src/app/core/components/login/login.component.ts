import { LogInFormGroup } from './../../models/login.form-group';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: LogInFormGroup;
  errorMessage: string;

  constructor() { }

  ngOnInit() {
    this.form = new LogInFormGroup();
    document.body.style.backgroundColor = '#f6f6f6';
  }

  login(form) {
    // this.authService.login(form.value)
    //   .subscribe(response => {
    //     if(response.hasOwnProperty("Error")){
    //       this.errorMessage = response["Error"];
    //       console.log(this.errorMessage)
    //     }
    //     else {
    //       this.userService.updateUser(response);
    //       this.router.navigateByUrl("/");
    //     }
    //   })
  }
}
