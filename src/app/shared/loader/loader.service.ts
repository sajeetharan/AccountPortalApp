import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { LoaderState } from './loader';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class LoaderService {
    pendingHttpRequests: number;
    loaderState: Observable<LoaderState>;
    private loaderSubject = new Subject<LoaderState>();

    constructor() {
        this.loaderState = this.loaderSubject.asObservable();
        this.pendingHttpRequests = 0;
    }

    show() {
        this.loaderSubject.next(<LoaderState>{ show: true });
    }

    hide() {
        if (this.pendingHttpRequests === 0) {
            this.loaderSubject.next(<LoaderState>{ show: false });
        }
    }
}
