import {Component, OnInit} from '@angular/core';
import {HttpClientService} from "../api/http-client.service";
import {Word} from "../model/word.model";
import {HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-edit-words',
  templateUrl: './edit-words.component.html',
  styleUrls: ['./edit-words.component.css']
})
export class EditWordsComponent implements OnInit {
  words: Word[] = [];
  headers: HttpHeaders = new HttpHeaders();

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
  getAuth(){
    console.log(this.headers)
  }

  getWords(){
    this.httpService.getWords(this.headers).subscribe(
      res => {
        this.words = res;
      }, error => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    let token: string | null = localStorage.getItem('token');
    if(token !==null) {
      this.headers = this.headers.set('Authorization', `Bearer ${token}`);
    }
    this.httpService.getWords(this.headers).subscribe(
      res => {
        this.words = res;
      }
    );
  }
}
