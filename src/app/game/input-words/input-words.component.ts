import {Component, OnInit} from '@angular/core';
import {Word} from "../../settings/model/word/word.model";
import {HttpClientWordService} from "../../settings/api/http-client-word.service";
import {HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-input-words',
  templateUrl: './input-words.component.html',
  styleUrls: ['./input-words.component.css']
})
export class InputWordsComponent implements OnInit {
  word: Word = new Word('', '');
  translate: string = '';
  isCorrect: boolean = false;

  ngOnInit(): void {
    this.http.getRandomWord().subscribe((res) => {
      this.word = res;
    });
  }

  constructor(protected http: HttpClientWordService) {
  }

  sendTranslate(): void {
    this.http.sendTranslate(this.word, this.translate).subscribe((res) => {
      console.log(res)
      this.isCorrect = res;
      setTimeout(() => {
        if (res) {
          this.http.getRandomWord().subscribe((res) => {
            this.word = res;
            this.isCorrect = false;
            this.translate = '';
          });
        }
      }, 1000);
    });
  }
}
