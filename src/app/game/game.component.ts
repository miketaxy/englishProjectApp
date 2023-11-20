import {Component, OnInit} from '@angular/core';
import {Word} from "../word.model";
import {HttpClientService} from "../http-client.service";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit{
  words: Word[] = []


  constructor(protected httpService: HttpClientService) {

  }
  ngOnInit(): void {
    this.httpService.getWords().subscribe((res)=>{
      this.words = res;
    });
  }


}
