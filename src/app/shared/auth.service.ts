import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthHttp, AuthConfig, tokenNotExpired, JwtHelper } from 'angular2-jwt';
import { Router } from '@angular/router';
import { LoginInfo } from '../models/loginInfo';
import { AppMessageQueuService } from './appmsg.service';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {
    public loggedInfo: LoginInfo;
    private token: string;
    private role: string;
    private tokenInfo: any;
    jwtHelper: JwtHelper = new JwtHelper();
    constructor(private http: Http,
        private router: Router, private appMsgService: AppMessageQueuService) {
        this.loggedInfo = JSON.parse(localStorage.getItem('loggedInfo'));
    }

    login(username: string, password: string): Observable<LoginInfo> {
        const url = `${environment.apiUrl}/token`;
        const params = 'username=' + username + '&password=' + password + '&grant_type=password';
        const headers = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
        });
        return this.http.post(url, params, { headers: headers, withCredentials: true })
            .map((response: Response) => {
                console.log(response);
                const token = response.json() && response.json().access_token;
                if (token) {
                    this.tokenInfo = this.decodeToken(token);
                    this.loggedInfo = new LoginInfo();
                    this.loggedInfo.role = this.tokenInfo.Role;
                    this.loggedInfo.token = token;
                    this.loggedInfo.username = username;
                    this.loggedInfo.isLoggedIn = true;
                    this.appMsgService.authenticatedUserData.next(this.loggedInfo);
                    localStorage.setItem('token', token);
                    localStorage.setItem('loggedInfo', JSON.stringify(this.loggedInfo));
                    return this.loggedInfo;
                } else {
                    return this.loggedInfo;
                }
            },
            err => console.log(err));
    }
    public decodeToken(token: string) {
        return this.jwtHelper.decodeToken(token);
    }

    logout() {
        localStorage.setItem('token', null);
        localStorage.setItem('loggedInfo', null);
        this.router.navigate(['/login']);
    }

}
