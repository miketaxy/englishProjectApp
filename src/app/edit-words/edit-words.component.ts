import {Component, OnInit} from '@angular/core';
import {HttpClientService} from "../server/http-client.service";
import {Word} from "../word.model";

@Component({
  selector: 'app-edit-words',
  templateUrl: './edit-words.component.html',
  styleUrls: ['./edit-words.component.css']
})
export class EditWordsComponent implements OnInit {
  words: Word[] = [];
  isEdit: boolean = false;

  constructor(protected httpService: HttpClientService) {
  }

  deleteWord(word: Word) {
    this.words = this.words.filter(w => w.id !== word.id)
    return this.httpService.deleteWord(word).subscribe((res) =>
      console.log(res));
  };

  editWord(word: Word) {
    word.isEditing = !word.isEditing;
  }

  saveWord(word: Word) {
    word.isEditing = !word.isEditing;
    return this.httpService.editWord(word).subscribe((res) =>
      console.log(res));
  }

  ngOnInit() {
    this.httpService.getWords().subscribe(
      res => {
        this.words = res;
      }, error => {
        console.log(error);
      }
    );
  }
}
