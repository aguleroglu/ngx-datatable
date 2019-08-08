import { IExcelService } from "../src";

export class MyExcelService implements IExcelService{
    exportAsExcelFile(json: any[], excelFileName: string): void {
        console.log(json);
    }

}