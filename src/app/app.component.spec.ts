import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar.component/navbar.component';
import { LoginComponent } from './components/login.component/login.component';
import { AccountDetailsComponent } from './components/account-details.component/account-details.component';
import { DashboardComponent } from './components/dashboard.component/dashboard.component';
import { PageNotFoundComponent } from './components/page-not-found.component/page-not-found.component';
import { FileUploadComponent } from './shared/file_upload/file-upload.component';
import { UserNotAuthorizedComponent } from './components/user-not-authorized/user-not-authorized.component';
import { UploadComponent } from './components/upload.component/upload.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RoutingModule } from './app.routing.module';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { APP_BASE_HREF } from '@angular/common';
import { AuthService } from './shared/auth.service';
import { AuthGuard } from './shared/auth-guard.service';
import { AppMessageQueuService } from './shared/appmsg.service';
import { FileUploadService } from './services/file-upload.service';
import { AccountService } from './services/account.service';
import { ReportService } from './services/report.service';
import { LoaderComponent } from './shared/loader/loader.component';
import { LoaderService } from './shared/loader/loader.service';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavbarComponent,
        LoginComponent,
        AccountDetailsComponent,
        DashboardComponent,
        PageNotFoundComponent,
        FileUploadComponent,
        UserNotAuthorizedComponent,
        UploadComponent,
        LoaderComponent
      ],
      imports: [
        BrowserModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        NgbModule.forRoot(),
        RoutingModule,
        FlashMessagesModule,
        ChartsModule
      ],
      providers: [AuthService,
        AuthGuard,
        AppMessageQueuService,
        FileUploadService,
        AccountService,
        LoaderService,
        ReportService, { provide: APP_BASE_HREF, useValue: '/' }]
    }).compileComponents();
  }));
  it('should create the app with the default components navigation bar,spinner', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
