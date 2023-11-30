import {Component, OnInit} from '@angular/core';
import {HttpClientWordService} from "../settings/api/http-client-word.service";
import {Word} from "../settings/model/word/word.model";

@Component({
  selector: 'app-edit-words',
  templateUrl: './edit-words.component.html',
  styleUrls: ['./edit-words.component.css']
})
export class EditWordsComponent implements OnInit {
  words: Word[] = [];

  constructor(protected httpService: HttpClientWordService) {
  }

  deleteWord(word: Word) {
    this.words = this.words.filter(w => w.id !== word.id)
    return this.httpService.deleteWord(word).subscribe();
  };

  editWord(word: Word) {
    word.isEditing = !word.isEditing;
  }

  saveWord(word: Word) {
    word.isEditing = !word.isEditing;
    return this.httpService.editWord(word).subscribe();
  }

  ngOnInit() {
    this.httpService.getWords().subscribe(
      res => {
        this.words = res;
      }
    );
  }
}
