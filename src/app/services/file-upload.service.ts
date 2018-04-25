import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppMessageQueuService } from '../shared/appmsg.service';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
@Injectable()
export class FileUploadService {

    constructor(private http: Http, private router: Router, private appMsgService: AppMessageQueuService) {
    }

    Upload(fileObj: File): Observable<any> {
        const url = `${environment.apiUrl}/api/account/UploadAccountInfo`;
        const token = localStorage.getItem('token');
        const formData: FormData = new FormData();
        formData.append('uploadFile', fileObj, fileObj.name);
        const headers = new Headers();
        headers.append('Authorization', 'Bearer ' + token);
        const options = new RequestOptions({ headers: headers });
        return this.http.post(url, formData, options)
            .map(this.extractData)
            .catch(this.handleErrors);
    }
    private extractData(res: Response) {
        const data = res.json();
        return data;
    }

    private handleErrors(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
