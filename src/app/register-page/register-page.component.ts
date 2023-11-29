import { Component } from '@angular/core';
import {User} from "../model/user.model";
import {HttpHeaders} from "@angular/common/http";
import {HttpClientAuthService} from "../api/http-client-auth.service";
import {provideRouter, Router} from "@angular/router";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
  user: User = new User('', '');
  headers: HttpHeaders = new HttpHeaders();

  constructor(protected httpAuthService: HttpClientAuthService, private router: Router) {
  }

  onSubmit(): void {
    this.httpAuthService.register(this.user).subscribe((res) => {
      localStorage.setItem('token', res.token);
      this.router.navigate(['/']).then(()=>window.location.reload())
    });

  }
}

