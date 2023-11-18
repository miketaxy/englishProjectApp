import { Component } from '@angular/core';
import {Word} from "../../word.model";
import {HttpClientService} from "../../http-client.service";

@Component({
  selector: 'app-new-word',
  templateUrl: './new-word.component.html',
  styleUrls: ['./new-word.component.css']
})
export class NewWordComponent {
  word: Word = new Word('', '');
  constructor(protected httpService: HttpClientService) {
  }
  onAddWord() {
      this.httpService.sendWord(this.word).subscribe(
        res => {
          console.log(res);
        }, error => {
          console.log(error);
        }
      );
  }
}
