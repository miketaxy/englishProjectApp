import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Word} from "../model/word.model";
import {catchError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  headers: HttpHeaders = new HttpHeaders();
  constructor(protected http: HttpClient) {
    this.headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
  }
  getWords(){
    return this.http.get<Word[]>('http://localhost:8080/api/getAllWords', {headers: this.headers} );
  }
  sendWord(word: Word){
    return this.http.post('http://localhost:8080/api/sendWord', word, {headers: this.headers});
  }

  sendWordFile(file: File){
    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.http.post('http://localhost:8080/api/sendFile', formData, {headers: this.headers});
  }

  deleteWord(word: Word){
    return this.http.delete(`http://localhost:8080/api/deleteWord?word=${word.word}&translate=${word.translate}`, {headers: this.headers});
  }
  editWord(word: Word){
    return this.http.put('http://localhost:8080/api/editWord', word, {headers: this.headers});
  }

  getRandomWord(){
    return this.http.get<Word>('http://localhost:8080/api/game', {headers: this.headers}).pipe(
      catchError((error) => {
        console.error('Error occurred:', error);
        throw error;
      })
    );
  }

  sendTranslate(word: Word, translate: string){
    return this.http.post<boolean>('http://localhost:8080/api/game', word
      , {params: new HttpParams().set('translate', translate), headers: this.headers});
  }
  getUsername(){
    return this.http.get<string>('http://localhost:8080/auth/getUsername', {headers: this.headers, responseType: 'text' as 'json'});
  }
}
