import { Directive, TemplateRef } from '@angular/core';

@Directive({ selector: '[ngx-datatable-cell-hover-template]' })
export class DataTableColumnCellHoverDirective {
  constructor(public template: TemplateRef<any>) { }
}
