import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RoutingModule } from './app.routing.module';
import { AuthService } from './shared/auth.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuard } from './shared/auth-guard.service';
import { FileUploadComponent } from './shared/file_upload/file-upload.component';
import { AppMessageQueuService } from './shared/appmsg.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FileUploadService } from './services/file-upload.service';
import { AccountService } from './services/account.service';
import { UserNotAuthorizedComponent } from './components/user-not-authorized/user-not-authorized.component';
import { NavbarComponent } from './components/navbar.component/navbar.component';
import { LoginComponent } from './components/login.component/login.component';
import { AccountDetailsComponent } from './components/account-details.component/account-details.component';
import { DashboardComponent } from './components/dashboard.component/dashboard.component';
import { PageNotFoundComponent } from './components/page-not-found.component/page-not-found.component';
import { UploadComponent } from './components/upload.component/upload.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { ReportService } from './services/report.service';
import { LoaderComponent } from './shared/loader/loader.component';
import { LoaderService } from './shared/loader/loader.service';
@NgModule({
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
    LoaderComponent,
  ],
  imports: [
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
    ReportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
