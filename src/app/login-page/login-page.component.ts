import {Component} from '@angular/core';
import {User} from "../model/user.model";
import {HttpClientAuthService} from "../api/http-client-auth.service";
import {HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  user: User = new User('', '');
  headers: HttpHeaders = new HttpHeaders();

  constructor(protected httpAuthService: HttpClientAuthService) {
  }

  onSubmit(): void {
    this.httpAuthService.login(this.user).subscribe((res) => {
      localStorage.setItem('token', res.token);
    });
  }
}
