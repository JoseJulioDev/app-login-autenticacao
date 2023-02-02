import { LoginService } from './login.service';
import { FormBuilder, Validators } from '@angular/forms';

import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  })

  isLoading = false;

  constructor(private formBuilder: FormBuilder, private service: LoginService, private router: Router) { }

  login(): void {
    const {email, password} = this.formGroup.controls;

    this.formGroup.disable();

    this.isLoading = true;

    this.service.login(email.value, password.value).subscribe(
      () => {
        this.isLoading = false;

        this.router.navigate(['dashboard']);
      },
      erro => {
        this.formGroup.enable();
        this.isLoading = false;
      }
    );
  }

}
