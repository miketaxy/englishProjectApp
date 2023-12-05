import {Component, OnInit} from '@angular/core';
import {User} from "../settings/model/auth/user.model";
import {HttpHeaders} from "@angular/common/http";
import {HttpClientAuthService} from "../settings/api/http-client-auth.service";
import {provideRouter, Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthGuardService} from "../auth-guard.service";
import {RegisterValidatorService} from "../validators/register-validator.service";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent{
  form: FormGroup;
  constructor(protected httpAuthService: HttpClientAuthService, private router: Router, private fb: FormBuilder, private registerValidator: RegisterValidatorService){
    this.form = this.fb.group({
      username: '',
      password: ['', Validators.required, this.registerValidator.passwordValidator],
    });
  }



  async onSubmit(): Promise<void> {
      let myForm = this.form.value;
      this.httpAuthService.register(myForm).subscribe((res) => {
        if(res.message !== "Username is taken") {
          localStorage.setItem('token', res.token);
          this.router.navigate(['/']).then(() => window.location.reload())
        }
        else{
          alert(res.message);
          window.location.reload();
        }
        });
  }
}

