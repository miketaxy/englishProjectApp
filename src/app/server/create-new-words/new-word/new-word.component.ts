import { Component } from '@angular/core';
import {Word} from "../../../settings/model/word/word.model";
import {HttpClientWordService} from "../../../settings/api/http-client-word.service";
import {HttpClientTranslatorService} from "../../../settings/api/http-client-translator.service";
import {SendWord} from "../../../settings/model/translate-api/send-word.model";
import {TranslationResponse} from "../../../settings/model/translate-api/translation-response.model";

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
  constructor(protected httpService: HttpClientWordService, protected httpServiceTranslator: HttpClientTranslatorService) {
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
