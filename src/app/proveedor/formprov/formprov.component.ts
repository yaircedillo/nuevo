import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/interfaces/proveedor';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formprov',
  templateUrl: './formprov.component.html',
  styleUrls: ['./formprov.component.css']
})
export class FormprovComponent implements OnInit {

  proveedor: Proveedor = {
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
  id_proveedores: any;
  editing: boolean = false;
  proveedores: Proveedor[];
  constructor( private proveedorService: ProveedorService, private activatedRoute: ActivatedRoute) {
    this.id_proveedores = this.activatedRoute.snapshot.params['id_proveedores'];
   if (this.id_proveedores) {
     this.editing = true;
     this.proveedorService.get().subscribe((data: Proveedor[]) => {
       this.proveedores = data;
       this.proveedor = this.proveedores.find( (p) => { return p.id_proveedores == this.id_proveedores });
       console.log(this.proveedor);
     }, (error) => {
       console.log(error);
     });
   } else {
    this.editing = false;
   }


  }

  ngOnInit() {
  }

  saveProv() {
    if (this.editing) {
      this.proveedorService.put(this.proveedor).subscribe((data) => {
        alert('Datos Actualizados Correctamente. ');
        console.log(data);
      }, (error) => {
        console.log(error);
        alert('Ocurrio un error');
      });
    } else {
      this.proveedorService.save(this.proveedor).subscribe((data) => {
        alert('Datos Guardados Correctamente. ');
        console.log(data);
      }, (error) => {
        console.log(error);
        alert('Ocurrio un error');
      });
    }
  }

}
