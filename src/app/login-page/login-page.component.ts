import {Component} from '@angular/core';
import {User} from "../settings/model/auth/user.model";
import {HttpClientAuthService} from "../settings/api/http-client-auth.service";
import {HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {HttpClientUserService} from "../settings/api/http-client-user.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  user: User = new User( '', '');
  headers: HttpHeaders = new HttpHeaders();

  constructor(protected httpAuthService: HttpClientAuthService, private router: Router, protected httpUser: HttpClientUserService) {
  }

  onSubmit(): void {
    this.httpAuthService.login(this.user).subscribe((res) => {
      localStorage.setItem('token', res.token);
      this.router.navigate(['/']).then(()=>window.location.reload())
    });

  }
  check(){
    console.log(this.user);
  }
}
