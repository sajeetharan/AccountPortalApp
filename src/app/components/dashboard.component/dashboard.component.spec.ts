import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { ReportService } from '../../services/report.service';
import { AppMessageQueuService } from '../../shared/appmsg.service';
import { LoaderService } from '../../shared/loader/loader.service';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [HttpModule, NgbModule.forRoot(), BrowserModule, FormsModule, ChartsModule],
      providers: [LoaderService, ReportService, AppMessageQueuService, FlashMessagesService, { provide: Router }]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create report viewer component with default services and data', () => {
    expect(component).toBeTruthy();
  });
});
