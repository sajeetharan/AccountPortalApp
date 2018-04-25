import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { RouterModule, Router } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AuthService } from '../../shared/auth.service';
import { AppMessageQueuService } from '../../shared/appmsg.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { LoaderService } from '../../shared/loader/loader.service';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, RouterModule],
      providers: [{ provide: Router }, AuthService, AppMessageQueuService, FlashMessagesService, LoaderService],
      declarations: [NavbarComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create navigation bar with dependencies', () => {
    expect(component).toBeTruthy();
  });
});
