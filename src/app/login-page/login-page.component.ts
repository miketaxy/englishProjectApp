import {Component} from '@angular/core';
import {User} from "../settings/model/auth/user.model";
import {HttpClientAuthService} from "../settings/api/http-client-auth.service";
import {HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {HttpClientUserService} from "../settings/api/http-client-user.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  form: FormGroup<{ password: FormControl<string | null>; username: FormControl<string | null> }> = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  headers: HttpHeaders = new HttpHeaders();

  constructor(protected httpAuthService: HttpClientAuthService, private router: Router) {

  }

  onSubmit(): void {
    const myForm = this.form.value;
    this.httpAuthService.login(myForm).subscribe((res) => {
      localStorage.setItem('token', res.token);
      this.router.navigate(['/']).then(()=>window.location.reload())
    });

  }
}
