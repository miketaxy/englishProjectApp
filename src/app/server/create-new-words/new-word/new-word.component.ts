import { Component } from '@angular/core';
import {Word} from "../../../model/word.model";
import {HttpClientService} from "../../../api/http-client.service";
import {HttpClientTranslatorService} from "../../../api/http-client-translator.service";
import {SendWord} from "../../../model/send-word.model";
import {TranslationResponse} from "../../../model/translation-response.model";

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
    this.httpServiceTranslator.getTranslate(this.sendWord).subscribe((res: any)=>{
      this.word.translate = res.data.translatedText;
    })
  }
  isAutomaticTranslationChange() {
    this.isAutomaticTranslation = !this.isAutomaticTranslation;
    if (this.isAutomaticTranslation) {
      this.temp = this.word.translate;
      this.word.translate = '';
    }
    else{
      this.word.translate = this.temp;
    }
  }
  onAddWord() {
    this.word.word = this.notTranslatedWord;
    this.httpService.sendWord(this.word).subscribe();
  }
}
