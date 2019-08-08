import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';


export interface IExcelService {
  exportAsExcelFile(json: any[], excelFileName: string,opt:any): void;
}

const EXCEL_EXTENSION = '.xlsx';

@Injectable()
export class ExcelService implements IExcelService {

  constructor() { }

  public exportAsExcelFile(json: any[], excelFileName: string,opt:any): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    XLSX.writeFile(workbook, excelFileName + EXCEL_EXTENSION);
  }
}
