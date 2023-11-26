import {Component, OnInit} from '@angular/core';
import {Word} from "../../model/word.model";
import {HttpClientService} from "../../api/http-client.service";

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

  constructor(protected http: HttpClientService) {
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
