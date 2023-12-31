import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NewWordComponent } from './server/create-new-words/new-word/new-word.component';
import { GameComponent } from './game/game.component';
import {NewWordFileComponent} from "./server/create-new-words/new-word-file/new-word-file.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CreateNewWordsComponent } from './server/create-new-words/create-new-words.component';
import { EditWordsComponent } from './edit-words/edit-words.component';
import {RouterModule} from "@angular/router";
import { InputWordsComponent } from './game/input-words/input-words.component';
import { CorrectIncorrectDirective } from './game/input-words/correct-incorrect.directive';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import {AuthGuardService} from "./auth-guard.service";

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    NavBarComponent,
    NewWordComponent,
    GameComponent,
    NewWordFileComponent,
    CreateNewWordsComponent,
    EditWordsComponent,
    InputWordsComponent,
    CorrectIncorrectDirective,
    LoginPageComponent,
    RegisterPageComponent,
  ],
  imports: [
    RouterModule.forRoot([
      {path: 'create', component: ServerComponent, canActivate: [AuthGuardService]},
      {path: 'edit', component: EditWordsComponent, canActivate: [AuthGuardService]},
      {path: 'game', component: GameComponent, canActivate: [AuthGuardService]},
      {path: 'login', component: LoginPageComponent},
      {path: 'register', component: RegisterPageComponent},
      {path: '', redirectTo: 'create', pathMatch: 'full'}
    ]),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
