import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { LoginInfo } from '../models/loginInfo';
@Injectable()
export class AppMessageQueuService {
    authenticatedUserData: Subject<LoginInfo>;
    constructor() {
        this.authenticatedUserData = new Subject<LoginInfo>();
    }


}
