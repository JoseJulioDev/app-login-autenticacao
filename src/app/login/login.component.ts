import { LoginService } from './login.service';
import { FormBuilder, Validators } from '@angular/forms';

import { Component} from '@angular/core';

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

  constructor(private formBuilder: FormBuilder, private service: LoginService) { }

  login(): void {
    const {email, password} = this.formGroup.controls;

    this.formGroup.disable();

    this.isLoading = true;

    this.service.login(email.value, password.value).subscribe(
      () => {
        this.formGroup.enable();
        this.isLoading = false;
      },
      erro => {
        this.formGroup.enable();
        this.isLoading = false;
      }
    );
  }

}
