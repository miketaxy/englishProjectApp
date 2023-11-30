import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpClientUserService {
  headers = new HttpHeaders();
  constructor(protected http: HttpClient) {
    this.headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
  }

  getUsername(){
    return this.http.get<string>('http://localhost:8080/auth/getUsername', {headers: this.headers, responseType: 'text' as 'json'});
  }
}
