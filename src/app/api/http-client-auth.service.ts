import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {User} from "../model/user.model";
import {AuthAnswerModel} from "../model/auth-answer.model";


@Injectable({
  providedIn: 'root'
})
export class HttpClientAuthService{
  constructor(protected http: HttpClient) {
  }
  register(user:User){
    return this.http.post<AuthAnswerModel>('http://localhost:8080/auth/register', user);
  }
  login(user:User){
    return this.http.post<AuthAnswerModel>('http://localhost:8080/auth/login', user);
  }
}
