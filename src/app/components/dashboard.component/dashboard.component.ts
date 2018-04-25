import { Component, OnInit, ViewChild } from '@angular/core';
import { FileUploadService } from '../../services/file-upload.service';
import { FlashMessagesService } from 'angular2-flash-messages/module';
import { AccountService } from '../../services/account.service';
import { ReportService } from '../../services/report.service';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { BaseChartDirective } from 'ng2-charts';
import { AppMessageQueuService } from '../../shared/appmsg.service';
import { LoaderService } from '../../shared/loader/loader.service';
const now = new Date();
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
  export class DashboardComponent implements OnInit {
    @ViewChild(BaseChartDirective) private _chart;

    lineChartLabels: String[] = [];
    fromDate: NgbDateStruct;
    toDate: NgbDateStruct;
    role: string;
    datasets: any[];
    public lineChartOptions: any = {
      animation: false,
      responsive: true
    };
    public lineChartLegend = true;
    public lineChartType = 'line';

    constructor(public _flashMessagesService: FlashMessagesService,
      private _router: Router,
      private _loader: LoaderService,
      private _reportService: ReportService) { }

    ngOnInit() {
      this.datasets = [{ data: [] }];
  }
    
    forceChartRefresh() {
      setTimeout(() => {
        this._chart.refresh();
      }, 10);
    }
    getChartDetails() {
      this.lineChartLabels = [];
      this.datasets = [];
      this._reportService.getChartInfo(fromDate, toDate).subscribe((response) => {
        const grouped = response.lstBalances.map(function (o) {
            return {
              data: o.AccountBalanceOnMonth.map(function (p) { return +p.Amount; }),
              label: o.AccountName
            };
          });
          this.buildchart(grouped, response.lstMonths);
      

      });
    }
    buildchart(data: any, labels: any) {
      this.datasets = data;
      for (const label of labels) {
        this.lineChartLabels.push(label);
      }
      this.datasets = this.datasets.slice();
      this.forceChartRefresh();
    }

  }
