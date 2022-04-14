import { Component, OnInit } from '@angular/core';

import {FileItem, FileUploader} from 'ng2-file-upload';
import { ToastrService } from 'ngx-toastr';

 
const URL = 'http://localhost:8080/api/upload';
@Component({
  selector: 'app-uplolader-files',
  templateUrl: './uplolader-files.component.html',
  styleUrls: ['./uplolader-files.component.css']
})
export class UploladerFilesComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({
    url: URL,
 
    itemAlias: 'image',
  });
   

  constructor(private toastr: ToastrService) {}
  ngOnInit() {

    this.uploader.onProgressItem = (fileItem: FileItem, progress: any) => {
      console.log(fileItem);
      console.log(progress);

  };

    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
    };
    this.uploader.onCompleteItem = (item: any, status: any) => {
      console.log('Uploaded File Details:', item);
      this.toastr.success('File successfully uploaded!');
    };
  }
  
 

}
