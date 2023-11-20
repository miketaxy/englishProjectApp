import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NewWordComponent } from './server/create-new-words/new-word/new-word.component';
import { GameComponent } from './game/game.component';
import {NewWordFileComponent} from "./server/create-new-words/new-word-file/new-word-file.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { CreateNewWordsComponent } from './server/create-new-words/create-new-words.component';
import { EditWordsComponent } from './edit-words/edit-words.component';
import {RouterModule} from "@angular/router";
import { InputWordsComponent } from './game/input-words/input-words.component';

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
    InputWordsComponent
  ],
  imports: [
    RouterModule.forRoot([
      {path: 'create', component: ServerComponent},
      {path: 'edit', component: EditWordsComponent},
      {path: 'game', component: GameComponent},
      {path: '', redirectTo: 'create', pathMatch: 'full'}
    ]),
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
