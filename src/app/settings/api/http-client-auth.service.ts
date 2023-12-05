import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AuthAnswerModel} from "../model/auth/auth-answer.model";



@Injectable({
  providedIn: 'root'
})
export class HttpClientAuthService{
  constructor(protected http: HttpClient) {
  }
  register(form: any){
    return this.http.post<AuthAnswerModel>('http://localhost:8080/auth/register', form);
  }
  login(form: any){
    return this.http.post<AuthAnswerModel>('http://localhost:8080/auth/login', form);
  }
}
