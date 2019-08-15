import { Injectable } from '@angular/core';
import { Cliente } from '../interfaces/cliente';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  API_ENDPOINT = 'http://127.0.0.1:8000/api/';
  constructor(private httpClient: HttpClient) { }

  get() {
    return this.httpClient.get(this.API_ENDPOINT + 'cliente');
  }
    save(cliente: Cliente) {
      const headers = new HttpHeaders({'Content-Type': 'application/json'});
      return this.httpClient.post(this.API_ENDPOINT + 'cliente', cliente, {headers: headers});

    }
    put( cliente ) {
      const headers = new HttpHeaders({'Content-Type': 'application/json'});
      return this.httpClient.put(this.API_ENDPOINT + 'cliente/' + cliente.id_cliente, cliente, {headers: headers});

    }
    delete (id_cliente) {
      return this.httpClient.delete(this.API_ENDPOINT + 'cliente/' + id_cliente);
    }
}

