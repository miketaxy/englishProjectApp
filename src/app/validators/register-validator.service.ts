import {Injectable} from "@angular/core";
import {HttpClientUserService} from "../settings/api/http-client-user.service";
import {FormControl} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})

export class RegisterValidatorService {
  constructor() {
  }

  passwordValidator(control: FormControl) {
    let password = control.value;
    return new Promise(resolve => {
      if (password.length < 8) {
        resolve({password: true});
      }
      return null;
    });
  }
}
