import {Component, OnInit} from '@angular/core';
import {HttpClientService} from "../api/http-client.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isUserLogged: string = "Login";


  constructor(protected http: HttpClientService) {
  }
  logout(){
    localStorage.removeItem('token');
    this.isUserLogged = "Login";
  }

  ngOnInit(): void {
    if (localStorage.getItem('token') !== null) {
      this.http.getUsername().subscribe((res) => {
        this.isUserLogged = res;
      }, error => {
        console.log(error)
      });
    }
  }
}
