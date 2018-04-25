import { LoginInfo } from '../models/loginInfo';
import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Router } from '@angular/router';
import { AppMessageQueuService } from './appmsg.service';
class MockUserService {
    public login(username: string, password: string): Promise<LoginInfo> {
        return Promise.resolve(<LoginInfo>{ username: 'Sundt', 'token': 't43242', isLoggedIn: true, role: 'Admin' });
    }

}
describe('AuthenticationService test', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                { provide: Router },
                AuthService,
                AppMessageQueuService
            ],
            imports: [HttpModule],
        });
    });
    it('Should call  service login', inject([AuthService], (authService: AuthService) => {
        spyOn(authService, 'login').and.callThrough();
        expect(authService.login).not.toHaveBeenCalled();
        authService.login('Sundt', 'Sundt');
        expect(authService.login).toHaveBeenCalled();
    }));
    it('Not Authenticated check', inject([AuthService], (authService: AuthService) => {
        expect(authService.loggedInfo).toBe(null);
    }));
    it('Authenticated check', inject([AuthService], (authService: AuthService) => {
        authService.login('Sundt', 'Sundt').subscribe((user) => {
            if (user == null) {
                return;
            }
            expect(authService.loggedInfo.username).not.toBe(null);
        });
        authService.login('Sundt', 'Sundt');
    }));
});
