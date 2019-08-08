export interface IExcelService {
    exportAsExcelFile(json: any[], excelFileName: string, opt: any): void;
}
export declare class ExcelService implements IExcelService {
    constructor();
    exportAsExcelFile(json: any[], excelFileName: string, opt: any): void;
}
