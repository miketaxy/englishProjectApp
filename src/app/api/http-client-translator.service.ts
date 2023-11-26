import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {SendWord} from "../model/send-word.model";
import {environment} from "../environment";

@Injectable({
  providedIn: 'root'
})
export class HttpClientTranslatorService {
  url = 'https://text-translator2.p.rapidapi.com';
  headers = new HttpHeaders();
  constructor(protected http: HttpClient) {

  }

  getTranslate(data: SendWord) {
    const formData = new FormData()
    formData.append('source_language', data.source_language);
    formData.append('target_language', data.target_language);
    formData.append('text', data.text);
    this.headers = this.headers.set('x-rapidapi-key', environment.apiKey);
    return this.http.post(`${this.url}/translate`, formData, {headers: this.headers});
  }
}
