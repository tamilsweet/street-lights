import { Component, Input, Injectable } from '@angular/core';
import { ColumnComponent } from "./column/column.component";

@Component({
  selector: 'datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent {

  @Input() dataset;
  @Input() id;
  @Input() class;
  columns: ColumnComponent[] = [];

  constructor() { }

  addColumn(column) {
    this.columns.push(column);
  }
}
