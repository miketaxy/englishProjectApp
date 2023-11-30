import {Component, OnInit} from '@angular/core';
import {HttpClientWordService} from "../settings/api/http-client-word.service";
import {HttpClientUserService} from "../settings/api/http-client-user.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isUserLogged: string = "Login";


  constructor(protected httpUser: HttpClientUserService) {
  }
  logout(){
    localStorage.removeItem('token');
    this.isUserLogged = "Login";
  }

  ngOnInit(): void {
    if (localStorage.getItem('token') !== null) {
      this.httpUser.getUsername().subscribe((res) => {
        this.isUserLogged = res;
      }, error => {
        console.log(error)
      });
    }
  }
}
