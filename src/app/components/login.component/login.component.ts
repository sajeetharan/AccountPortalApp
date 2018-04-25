import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages/module';
import { User } from '../../models/user';
import { LoaderService } from '../../shared/loader/loader.service';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
    public user: User;
    showRegister: boolean;
    loading = false;
    error = '';
    constructor(private _router: Router, private _loginService: AuthService,
        public _flashMessagesService: FlashMessagesService,
        private _loader: LoaderService) {

    }
    ngOnInit() {
        this.user = {
            username: '',
            password: '',
            role: ''
        };
    }
    onSubmit(isValid: boolean) {

        self.loginService.loginUser(this.email, this.password).subscribe(
          (data: loginResponse){
          console.log(data.status);
          if(data.status == false){
            console.log('FAILED!!');
            this.router.navigate(['#']);
          } else {
            console.log('LOGIN SUCCEED!');
            this.router.navigate(['events']);
          }
        })
        if (isValid) {
            this._loader.show();
            this._loginService.login(this.user.username, this.user.password).subscribe(
                result => {
                    if (result.isLoggedIn === true) {
                        this._loader.hide();
                        if (result.role === 'Admin') {
                            this._router.navigate(['/dashboard']);
                        }
                        if (result.role === 'Regular') {
                            this._router.navigate(['/accounts']);
                        }
                    } else {
                        this._loader.hide();
                        this.error = 'Username or password is incorrect';
                    }
                },
                err => {
                    this._loader.hide();
                    this.error = 'Username or password is incorrect';
                    this._flashMessagesService.show(this.error, { cssClass: 'alert-danger', timeout: 4000 });
                }
            );
        }
    }



}
