import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  DatatableComponent,
  DataTableColumnDirective,
  DataTableHeaderComponent,
  DataTableBodyComponent,
  DataTableFooterComponent,
  DataTableHeaderCellComponent,
  DataTablePagerComponent,
  DataTableBodyRowComponent,
  DataTableRowWrapperComponent,
  ProgressBarComponent,
  DataTableBodyCellComponent,
  DatatableRowDetailDirective,
  DatatableGroupHeaderDirective,
  ScrollerComponent,
  DataTableSelectionComponent,
  DataTableColumnHeaderDirective,
  DataTableColumnCellDirective,
  DataTableColumnCellHoverDirective,
  DataTableColumnCellTreeToggle,
  DatatableRowDetailTemplateDirective,
  DataTableFooterTemplateDirective,
  DatatableFooterDirective,
  DatatableGroupHeaderTemplateDirective,
  DataTableSummaryRowComponent
} from './components';

import {
  VisibilityDirective,
  LongPressDirective,
  ResizeableDirective,
  OrderableDirective,
  DraggableDirective
} from './directives';

import {
  ScrollbarHelper,
  DimensionsHelper,
  ColumnChangesService,
  ExcelService
} from './services';

import {
  TemplateComponent
} from './utils';

import { ServiceConfig, EXCEL_SERVICE } from './services/service.config';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ScrollbarHelper,
    DimensionsHelper,
    ColumnChangesService,
    ExcelService
  ],
  entryComponents: [
    TemplateComponent
  ],
  declarations: [
    DataTableFooterTemplateDirective,
    VisibilityDirective,
    DraggableDirective,
    ResizeableDirective,
    OrderableDirective,
    LongPressDirective,
    ScrollerComponent,
    DatatableComponent,
    DataTableColumnDirective,
    DataTableHeaderComponent,
    DataTableHeaderCellComponent,
    DataTableBodyComponent,
    DataTableFooterComponent,
    DataTablePagerComponent,
    ProgressBarComponent,
    DataTableBodyRowComponent,
    DataTableRowWrapperComponent,
    DatatableRowDetailDirective,
    DatatableGroupHeaderDirective,
    DatatableRowDetailTemplateDirective,
    DataTableBodyCellComponent,
    DataTableSelectionComponent,
    DataTableColumnHeaderDirective,
    DataTableColumnCellDirective,
    DataTableColumnCellHoverDirective,
    DataTableColumnCellTreeToggle,
    DatatableFooterDirective,
    DatatableGroupHeaderTemplateDirective,
    DataTableSummaryRowComponent,
    TemplateComponent
  ],
  exports: [
    DatatableComponent,
    DatatableRowDetailDirective,
    DatatableGroupHeaderDirective,
    DatatableRowDetailTemplateDirective,
    DataTableColumnDirective,
    DataTableColumnHeaderDirective,
    DataTableColumnCellDirective,
    DataTableColumnCellHoverDirective,
    DataTableColumnCellTreeToggle,
    DataTableFooterTemplateDirective,
    DatatableFooterDirective,
    DataTablePagerComponent,
    DatatableGroupHeaderTemplateDirective
  ]
})
export class NgxDatatableModule {

  static forRoot(config?: ServiceConfig): ModuleWithProviders {
    return {
      ngModule: NgxDatatableModule,
      providers: [
        { provide: EXCEL_SERVICE, useClass: config && config.excelService || ExcelService }
      ]
    };
  }

}
