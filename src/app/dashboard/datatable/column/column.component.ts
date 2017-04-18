import { Component, Input } from '@angular/core';
import { DatatableComponent } from "../datatable.component";

@Component({
  selector: 'column',
  template: '',
})
export class ColumnComponent {

  @Input() value;
  @Input() header;
  @Input() placeholder;
  @Input() type;

  constructor(table: DatatableComponent) {
    table.addColumn(this);
  }

}
