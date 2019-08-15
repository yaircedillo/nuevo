import { Injectable } from '@angular/core';

import { Insumo } from '../interfaces/insumo';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InsumoService {
  API_ENDPOINT = 'http://127.0.0.1:8000/api/';
  constructor(private httpClient: HttpClient) { }

get() {
  return this.httpClient.get(this.API_ENDPOINT + 'insumo');
}
  save(insumo: Insumo) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post(this.API_ENDPOINT + 'insumo', insumo, {headers: headers});

  }
  put( insumo ) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.put(this.API_ENDPOINT + 'insumo/' + insumo.id_insumo, insumo, {headers: headers});

  }
  delete (id_insumo) {
    return this.httpClient.delete(this.API_ENDPOINT + 'insumo/' + id_insumo);
  }
}
