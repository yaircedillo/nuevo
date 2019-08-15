import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Unidad } from '../interfaces/unidad';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
const EXCEL_TYPE =
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet; charset=UTF-8';
const EXCEL_EXT = '.xlsx';
@Injectable({
  providedIn: 'root'
})
export class UnidadesService {
  API_ENDPOINT = 'http://127.0.0.1:8000/api/';
  constructor(private httpClient: HttpClient) { }

get() {
  return this.httpClient.get(this.API_ENDPOINT + 'unidad');
}
  save(unidad: Unidad) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post(this.API_ENDPOINT + 'unidad', unidad, {headers: headers});

  }
  put( unidad ) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.put(this.API_ENDPOINT + 'unidad/' + unidad.id_unidad, unidad, {headers: headers});

  }
  delete (id_unidad) {
    return this.httpClient.delete(this.API_ENDPOINT + 'unidad/' + id_unidad);
  }

  exportToExcel(json: any[], excelFileName: string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const workbook: XLSX.WorkBook = {
      Sheets: { 'data': worksheet },
      SheetNames: ['data']
    };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcel(excelBuffer, excelFileName);
  }
  private saveAsExcel(buffer: any, fileName: string): void{
    const data: Blob = new Blob([buffer], {type: EXCEL_TYPE});
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXT);
  }
}
