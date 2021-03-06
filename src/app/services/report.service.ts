import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppMessageQueuService } from '../shared/appmsg.service';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable()
export class ReportService {

    constructor(private http: Http,
        private router: Router, private appMsgService: AppMessageQueuService) { }

    getChartInfo(startDate, endDate): Observable<any> {
        const url = `${environment.apiUrl}/api/account/GetAccountBalanceForChart?startDate=${startDate}&endDate=${endDate}`;
        const token = localStorage.getItem('token');
        const headers = new Headers();
        headers.append('Authorization', 'Bearer ' + token);
        headers.append('Content-Type', 'application/json');
        const options = new RequestOptions({ headers: headers });
        return this.http.get(url, options)
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
factories.factory('Login_Fac', function ($http, $window) {
    var LoginScredential = {
        GetData: () => {
            return $http({
                url: 'http://localhost:63252/api/department',
            })
        },
    };

    return LoginScredential;
});