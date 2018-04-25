import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserNotAuthorizedComponent } from './user-not-authorized.component';


describe('UserNotAuthorizedComponent', () => {
  let component: UserNotAuthorizedComponent;
  let fixture: ComponentFixture<UserNotAuthorizedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserNotAuthorizedComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNotAuthorizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component unathourized', () => {
    expect(component).toBeTruthy();
  });
});
