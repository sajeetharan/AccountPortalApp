import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountDetailsComponent } from './account-details.component';
import { Http, HttpModule } from '@angular/http';
import { Router } from '@angular/router';
import { AppMessageQueuService } from '../../shared/appmsg.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AccountService } from '../../services/account.service';
import { LoaderService } from '../../shared/loader/loader.service';

describe('AccountDetailsComponent', () => {
  let component: AccountDetailsComponent;
  let fixture: ComponentFixture<AccountDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [AccountDetailsComponent],
      providers: [AccountService,
        FlashMessagesService, LoaderService, AppMessageQueuService, { provide: Router }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the account details viewer with default services', () => {
    expect(component).toBeTruthy();
  });
});
