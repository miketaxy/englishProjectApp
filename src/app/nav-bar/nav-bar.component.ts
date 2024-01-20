import {Component, OnInit} from '@angular/core';
import {HttpClientUserService} from "../settings/api/http-client-user.service";
import {Router} from "@angular/router";
import {lastValueFrom} from "rxjs";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isUserLogged: string = "Login";


  constructor(protected httpUser: HttpClientUserService, protected router: Router) {
  }

  logout() {
    localStorage.removeItem('token');
    this.isUserLogged = "Login";
  }

  async ngOnInit(): Promise<void> {
    if (await this.checkIfTokenCorrect()) {
      this.httpUser.getUsername().subscribe((res) => {
        this.isUserLogged = res;
      }, error => {
        console.log(error)
      });
    } else {
      this.logout();
    }
  }

  async checkIfTokenCorrect() {
    return await lastValueFrom(this.httpUser.checkIfTokenCorrect());
  }
}
