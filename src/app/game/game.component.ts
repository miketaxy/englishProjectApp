import {Component, OnInit} from '@angular/core';
import {Word} from "../settings/model/word/word.model";
import {HttpClientWordService} from "../settings/api/http-client-word.service";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  constructor() {
  }

}
