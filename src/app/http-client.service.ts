import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Word} from "./word.model";
import {catchError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  constructor(protected http: HttpClient) {
  }
  getWords(){
    return this.http.get<Word[]>('http://localhost:8080/api/getAllWords');
  }
  sendWord(word: Word){
    return this.http.post('http://localhost:8080/api/sendWord', word);
  }

  sendWordFile(file: File){
    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.http.post('http://localhost:8080/api/sendFile', formData);
  }

  deleteWord(word: Word){
    return this.http.delete(`http://localhost:8080/api/deleteWord?word=${word.word}&translate=${word.translate}`);
  }
  editWord(word: Word){
    console.log('Word: ' + word.word);
    return this.http.put('http://localhost:8080/api/editWord', word);
  }

  getRandomWord(){
    return this.http.get<Word>('http://localhost:8080/api/game').pipe(
      catchError((error) => {
        console.error('Error occurred:', error);
        throw error; // Пробросить ошибку, чтобы обработать её в других местах
      })
    );
  }

  sendTranslate(word: Word, translate: string){
    return this.http.post<boolean>('http://localhost:8080/api/game', word
      , {params: new HttpParams().set('translate', translate)});
  }

}
