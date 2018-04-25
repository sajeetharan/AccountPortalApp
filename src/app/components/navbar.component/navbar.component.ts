import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import 'rxjs/add/operator/map';
import { AuthService } from '../../shared/auth.service';
import { AppMessageQueuService } from '../../shared/appmsg.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})

export class NavbarComponent implements OnInit {
  isLoggedIn: boolean;
  loggedInUser: string;
  role: string;
  constructor(
    public _flashMessagesService: FlashMessagesService,
    public _router: Router,
    public _appMsgService: AppMessageQueuService
  ) { }

  ngOnInit() {
    this._appMsgService.authenticatedUserData.asObservable().subscribe(value => {
      this.loggedInUser = value.username;
      this.role = value.role;
      this.isLoggedIn = value.isLoggedIn;
    });
    if (!this.loggedInUser) {
      if (localStorage.getItem('loggedInfo') !== null) {
        const loggedInfo = JSON.parse(localStorage.getItem('loggedInfo'));
        this.isLoggedIn = loggedInfo.isLoggedIn;
        this.loggedInUser = loggedInfo.username;
        this.role = loggedInfo.role;
      }
    }
  }

  onLogoutClick() {
    this._flashMessagesService.show('You have successfully logged out', { cssClass: 'alert-success', timeout: 4000 });
    this.isLoggedIn = false;
    localStorage.removeItem('loggedInfo');
    this._router.navigate(['/login']);
  }

}
