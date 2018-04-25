import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../../services/file-upload.service';
import { FlashMessagesService } from 'angular2-flash-messages/module';
import { AppMessageQueuService } from '../../shared/appmsg.service';
import { Router } from '@angular/router';
import { AccountService } from '../../services/account.service';
import { LoaderService } from '../../shared/loader/loader.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html'
})
export class AccountDetailsComponent implements OnInit {
  role: string;
  constructor(private router: Router,
    private _loader: LoaderService,
    public _flashMessagesService: FlashMessagesService,
    private _accountService: AccountService) { }
  accountList: Account[] = [];
  ngOnInit() {
    if (localStorage.getItem('loggedInfo') !== null) {
      const loggedInfo = JSON.parse(localStorage.getItem('loggedInfo'));
      this.role = loggedInfo.role;
      if (this.role === 'Admin') {
        this.router.navigate(['/unauthorized']);
      }
    }
    this.getDetails();
  }
  getDetails() {
    this._loader.show();
    this._accountService.getAccountInfo().subscribe((response) => {
      if (response.hasError === true) {
        this._loader.hide();
        this._flashMessagesService.show(response.Message, { cssClass: 'alert-danger', timeout: 4000 });
      } else {
        console.log(response);
        this.accountList = response;
        this._loader.hide();
      }

    });
  }
}
