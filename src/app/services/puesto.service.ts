import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Puesto } from '../interfaces/puesto';

@Injectable({
  providedIn: 'root'
})
export class PuestoService {
  API_ENDPOINT = 'http://127.0.0.1:8000/api/';
  constructor(private httpClient: HttpClient) { }

get() {
  return this.httpClient.get(this.API_ENDPOINT + 'puesto');
}
  save(puesto: Puesto) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post(this.API_ENDPOINT + 'puesto', puesto, {headers: headers});

  }
  put( puesto ) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.put(this.API_ENDPOINT + 'puesto/' + puesto.id_puesto, puesto, {headers: headers});

  }
  delete (id_puesto) {
    return this.httpClient.delete(this.API_ENDPOINT + 'puesto/' + id_puesto);
  }
}
