import { Component, Output, EventEmitter, ChangeDetectionStrategy, Input, TemplateRef } from '@angular/core';
import { DatatableFooterDirective } from './footer.directive';
@Component({
  selector: 'datatable-footer',
  template: `
    <div
      class="datatable-footer-inner"
      [ngClass]="{'selected-count': selectedMessage}"
      [style.height.px]="footerHeight">
      <ng-template
        *ngIf="footerTemplate"
        [ngTemplateOutlet]="footerTemplate.template"
        [ngTemplateOutletContext]="{ 
          rowCount: rowCount, 
          pageSize: pageSize, 
          selectedCount: selectedCount,
          curPage: curPage,
          offset: offset
        }">
      </ng-template>
      <button *ngIf="!footerTemplate"
        type="button" 
        class="btn datatable-export-button" 
        [innerHTML]="exportMessage" 
        (click)="onExport({type:'XLSX'})">
      </button>
      <div class="page-count" *ngIf="!footerTemplate">
        {{ totalMessage }}: {{ rowCount?.toLocaleString() }}
      </div>
      <select
        (change)="onPageSizeChanged($event)" 
        class="limit-select">
        <option *ngFor="let item of limitOptions" value="{{ item.id }}">{{ item.text }}</option>
      </select>
      <datatable-pager *ngIf="!footerTemplate"
        [pagerLeftArrowIcon]="pagerLeftArrowIcon"
        [pagerRightArrowIcon]="pagerRightArrowIcon"
        [pagerPreviousIcon]="pagerPreviousIcon"
        [pagerNextIcon]="pagerNextIcon"
        [page]="curPage"
        [size]="pageSize"
        [count]="rowCount"
        [hidden]="!isVisible"
        (change)="page.emit($event)">
      </datatable-pager>
    </div>
  `,
  host: {
    class: 'datatable-footer'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableFooterComponent {

  @Input() footerHeight: number;
  @Input() rowCount: number;
  @Input() pageSize: number;
  @Input() offset: number;
  @Input() limitOptions: any;
  @Input() pagerLeftArrowIcon: string;
  @Input() pagerRightArrowIcon: string;
  @Input() pagerPreviousIcon: string;
  @Input() pagerNextIcon: string;
  @Input() totalMessage: string;
  @Input() exportMessage: string;
  @Input() footerTemplate: DatatableFooterDirective;

  @Input() selectedCount: number = 0;
  @Input() selectedMessage: string | boolean;

  @Output() page: EventEmitter<any> = new EventEmitter();
  @Output() pageSizeChange: EventEmitter<any> = new EventEmitter();

  @Output() export: EventEmitter<any> = new EventEmitter();

  get isVisible(): boolean {
    return (this.rowCount / this.pageSize) > 1;
  }

  get curPage(): number {
    return this.offset + 1;
  }
  
  onPageSizeChanged(event: any) {
    this.pageSize = parseInt(event.target.value, 10);
    this.offset = 0;

    this.pageSizeChange.emit({
      count: this.rowCount,
      pageSize: this.pageSize,
      limit: parseInt(event.target.value, 10),
      offset: 0
    });
  }

  onExport(event: any) {
    this.export.emit(event);
  }
}
