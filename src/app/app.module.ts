import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { NavBarComponent } from './server/nav-bar/nav-bar.component';
import { NewWordComponent } from './server/new-word/new-word.component';
import { GameComponent } from './server/game/game.component';
import {NewWordFileComponent} from "./server/new-word-file/new-word-file.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    NavBarComponent,
    NewWordComponent,
    GameComponent,
    NewWordFileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
