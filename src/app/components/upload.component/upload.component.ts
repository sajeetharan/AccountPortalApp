import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppMessageQueuService } from '../../shared/appmsg.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html'
})
export class UploadComponent implements OnInit {
  role: string;
  constructor(private _router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('loggedInfo') !== null) {
      const loggedInfo = JSON.parse(localStorage.getItem('loggedInfo'));
      this.role = loggedInfo.role;
      if (this.role === 'Regular') {
        this._router.navigate(['/unauthorized']);
      }
    }
  }

}
