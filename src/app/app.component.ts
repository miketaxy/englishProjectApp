import {Component, OnInit} from '@angular/core';
import {AuthGuardService} from "./auth-guard.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthGuardService, Router]
})
export class AppComponent{
  constructor(private authSystemService: AuthGuardService, protected router: Router) {
  }

}
