import { InjectionToken, Type } from '@angular/core';
import { IExcelService } from '.';

export const EXCEL_SERVICE = new InjectionToken<IExcelService>('EXCEL_SERVICE');

export interface ServiceConfig {
    excelService: Type<IExcelService>;
}
