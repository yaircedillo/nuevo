import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/interfaces/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-fromclient',
  templateUrl: './fromclient.component.html',
  styleUrls: ['./fromclient.component.css']
})
export class FromclientComponent implements OnInit {
  cliente: Cliente = {
    nombre: null,
    ap_pat: null,
    ap_mat: null,
    genero: null,
    calle: null,
    colonia: null,
    cp: null,
    correo: null,
    telefono: null
  };
  id_cliente: any;
  editing: boolean = false;
  clientes: Cliente[];
  constructor( private clienteService: ClienteService, private activatedRoute: ActivatedRoute) {
    this.id_cliente = this.activatedRoute.snapshot.params['id_cliente'];
   if (this.id_cliente) {
     this.editing = true;
     this.clienteService.get().subscribe((data: Cliente[]) => {
       this.clientes = data;
       this.cliente = this.clientes.find( (c) => { return c.id_cliente == this.id_cliente });
       console.log(this.cliente);
     }, (error) => {
       console.log(error);
     });
   } else {
    this.editing = false;
   }


  }

  ngOnInit() {
  }

  saveClient() {
    if (this.editing) {
      this.clienteService.put(this.cliente).subscribe((data) => {
        alert('Datos Actualizados Correctamente. ');
        console.log(data);
      }, (error) => {
        console.log(error);
        alert('Ocurrio un errorr');
      });
    } else {
      this.clienteService.save(this.cliente).subscribe((data) => {
        alert('Datos Guardados Correctamente. ');
        console.log(data);
      }, (error) => {
        console.log(error);
        alert('Ocurrio un error');
      });
    }
  }

}