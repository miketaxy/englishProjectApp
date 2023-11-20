import { Component } from '@angular/core';
import {Word} from "../../../word.model";
import {HttpClientService} from "../../../http-client.service";
import {HttpClientTranslatorService} from "../../../http-client-translator.service";
import {SendWord} from "../../../send-word.model";
import {TranslationResponse} from "../../../translation-response.model";

@Component({
  selector: 'app-new-word',
  templateUrl: './new-word.component.html',
  styleUrls: ['./new-word.component.css']
})
export class NewWordComponent {
  notTranslatedWord: string = '';
  word: Word = new Word('', '');
  isAutomaticTranslation = false;
  temp: string = '';
  sendWord: SendWord = new SendWord('auto', 'ru', '');
  constructor(protected httpService: HttpClientService, protected httpServiceTranslator: HttpClientTranslatorService) {
  }
  onTranslate() {
    this.sendWord.text = this.notTranslatedWord;
    console.log(this.sendWord + " THIS IS SEND WORD")
    this.httpServiceTranslator.getTranslate(this.sendWord).subscribe((res: any)=>{
      this.word.translate = res.data.translatedText;
      console.log(res);
    })
  }
  isAutomaticTranslationChange() {
    this.isAutomaticTranslation = !this.isAutomaticTranslation;
    if (this.isAutomaticTranslation) {
      this.temp = this.word.translate;
      this.word.translate = '';
      console.log(this.temp);
    }
    else{
      this.word.translate = this.temp;
      console.log(this.temp);
    }
  }
  onAddWord() {
    this.word.word = this.notTranslatedWord;
      this.httpService.sendWord(this.word).subscribe(
        res => {
          console.log(res);
        }, error => {
          console.log(error);
        }
      );
  }
}
