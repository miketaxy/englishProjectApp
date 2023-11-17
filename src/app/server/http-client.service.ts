import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Word} from "./word.model";

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  constructor(protected http: HttpClient) {
  }
  getWords(){
    return this.http.get('http://localhost:8080/api/getAllWords');
  }
  sendWord(word: Word){
    return this.http.post('http://localhost:8080/api/sendWord', word);
  }

  sendWordFile(file: File){
    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.http.post('http://localhost:8080/api/sendFile', formData);
  }



}
