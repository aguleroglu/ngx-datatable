import { InjectionToken, Type } from '@angular/core';
import { IExcelService } from '.';
export declare const EXCEL_SERVICE: InjectionToken<IExcelService>;
export interface ServiceConfig {
    excelService: Type<IExcelService>;
}
