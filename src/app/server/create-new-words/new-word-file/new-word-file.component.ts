import { Component } from '@angular/core';
import {HttpClientService} from "../../http-client.service";

@Component({
  selector: 'app-new-word-file',
  templateUrl: './new-word-file.component.html',
  styleUrls: ['./new-word-file.component.css']
})
export class NewWordFileComponent {
  selectedFile: File | null = null;

  constructor(protected httpService: HttpClientService) {
  }

  onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    if (this.selectedFile != null) {
      this.httpService.sendWordFile(this.selectedFile).subscribe(
        res => {
          console.log(res);
        }, error => {
          console.log(error);
        }
      );
    }
  }
}
