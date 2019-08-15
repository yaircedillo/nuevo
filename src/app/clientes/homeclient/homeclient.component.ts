import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/interfaces/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-homeclient',
  templateUrl: './homeclient.component.html',
  styleUrls: ['./homeclient.component.css']
})
export class HomeclientComponent implements OnInit {
  cliente: Cliente[];
  filterPost = '';
  constructor(private clienteService: ClienteService ) {
  this.getCliente();
}

getCliente() {
  this.clienteService.get().subscribe( (data: Cliente[]) => {
    this.cliente = data;
  }, (error) => {
    console.log(error);
    alert('Ocurrio un error');
  });
}

ngOnInit() {
}
delete (id_cliente) {
  if (confirm('Seguro de eliminar ??')) {
    this.clienteService.delete(id_cliente).subscribe( (data) => {
      alert('Dato Eliminado Correctamente');
      console.log(data);
      this.getCliente();
    }, (error) => {
      console.log(error);
    });
  }


}

}
