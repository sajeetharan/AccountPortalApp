import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../shared/auth.service';
import { HttpModule } from '@angular/http';
import { AppMessageQueuService } from '../../shared/appmsg.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { LoaderService } from '../../shared/loader/loader.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, RouterModule, HttpModule],
      declarations: [LoginComponent],
      providers: [{ provide: Router }, AuthService, AppMessageQueuService, FlashMessagesService, LoaderService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create login component with login service as a dependency', () => {
    expect(component).toBeTruthy();
  });
});
