import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthAnswerModel} from "../model/auth/auth-answer.model";

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
  isUserNameTaken(username: string){
    return this.http.get<boolean>('http://localhost:8080/auth/isUsernameTaken/' + username);
  }
  checkIfTokenCorrect(){
    return this.http.get<boolean>('http://localhost:8080/auth/isTokenValid', {headers: this.headers});
  }
}
