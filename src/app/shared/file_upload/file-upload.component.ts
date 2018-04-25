import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FileUploadService } from '../../services/file-upload.service';
import { FlashMessagesService } from 'angular2-flash-messages/module';
import { ViewChild } from '@angular/core';
import { LoaderService } from '../loader/loader.service';
@Component({
    selector: 'app-file-upload',
    templateUrl: './file-upload.component.html',
})
export class FileUploadComponent {
    @ViewChild('fileVar')
    fileVar: any;
    constructor(private _uploadService: FileUploadService,
        public _flashMessagesService: FlashMessagesService,
        private _loader: LoaderService) {

    }
    fileChange(event) {
        const file = event.srcElement.files[0];
        this._loader.show();
        this._uploadService.Upload(file).subscribe((response) => {
            if (response.hasError === true) {
                this._loader.hide();
                this.reset();
                this._flashMessagesService.show(response.Message +
                    ', please recheck your file content',
                    { cssClass: 'alert-danger', timeout: 4000 });
            } else {
                this.reset();
                this._loader.hide();
                this._flashMessagesService.show(response.Message +
                    ',navigate to report to analyse in detial ',
                    { cssClass: 'alert-success', timeout: 4000 });
            }

        });
    }
    reset() {
        console.log(this.fileVar.nativeElement.files);
        this.fileVar.nativeElement.value = '';
        console.log(this.fileVar.nativeElement.files);
    }
}
