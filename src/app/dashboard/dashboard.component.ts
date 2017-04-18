import { Component } from '@angular/core';
import { Http, Response } from "@angular/http";

declare var $: any;

declare var System: SystemJS;

interface SystemJS {
  import: (path?: string) => Promise<any>;
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  devices;
  counts;

  constructor(private http: Http) {
    //this.http.get('/assets/data/devices.json')
    this.http.get('http://52.79.215.95:8081/devices')
      .subscribe(res => {
        this.devices = res.json()
        this.initDatatables();
      });
    this.http.get('http://52.79.215.95:8081/counts')
      .subscribe(res => {
        this.counts = res.json()
        this.updateCounts();
      });
  }

  render() {
    console.log('Datatables initialized...');
  }

  updateCounts() {

  }
  initDatatables() {
    Promise.all([
      System.import('script-loader!assets/js/device-table.js'),
    ]).then(() => {
      this.render()
    })
  }

}
