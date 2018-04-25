import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UploadComponent } from './upload.component';
import { FileUploadComponent } from '../../shared/file_upload/file-upload.component';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages/module';
import { FileUploadService } from '../../services/file-upload.service';
import { HttpModule } from '@angular/http';
import { AppMessageQueuService } from '../../shared/appmsg.service';
import { LoaderService } from '../../shared/loader/loader.service';

describe('UploadComponent', () => {
  let component: UploadComponent;
  let fixture: ComponentFixture<UploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [UploadComponent, FileUploadComponent],
      providers: [{ provide: Router }, AppMessageQueuService, FlashMessagesService, FileUploadService, LoaderService],

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create upload component with the child component file upload and service', () => {
    expect(component).toBeTruthy();
  });
});
