import { EventEmitter } from '@angular/core';
import { DatatableFooterDirective } from './footer.directive';
export declare class DataTableFooterComponent {
    footerHeight: number;
    rowCount: number;
    pageSize: number;
    offset: number;
    limitOptions: any;
    pagerLeftArrowIcon: string;
    pagerRightArrowIcon: string;
    pagerPreviousIcon: string;
    pagerNextIcon: string;
    totalMessage: string;
    exportMessage: string;
    footerTemplate: DatatableFooterDirective;
    selectedCount: number;
    selectedMessage: string | boolean;
    page: EventEmitter<any>;
    pageSizeChange: EventEmitter<any>;
    export: EventEmitter<any>;
    readonly isVisible: boolean;
    readonly curPage: number;
    onPageSizeChanged(event: any): void;
    onExport(event: any): void;
}
