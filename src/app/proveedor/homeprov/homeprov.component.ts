
import { Component, OnInit } from '@angular/core';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { Proveedor } from 'src/app/interfaces/proveedor';

@Component({
  selector: 'app-homeprov',
  templateUrl: './homeprov.component.html',
  styleUrls: ['./homeprov.component.css']
})
export class HomeprovComponent implements OnInit {
  proveedor: Proveedor[];
  filterProv = '';
  constructor(private proveedorService: ProveedorService ) {
  this.getProveedor();
}
getProveedor() {
  this.proveedorService.get().subscribe( (data: Proveedor[]) => {
    this.proveedor = data;
  }, (error) => {
    console.log(error);
    alert('Ocurrio un error');
  });
}
ngOnInit() {
}
delete (id_proveedores) {
  if (confirm('Seguro de eliminar ??')){
    this.proveedorService.delete(id_proveedores).subscribe( (data) => {
      alert('Dato Eliminado Correctamente');
      console.log(data);
      this.getProveedor();
    }, (error) => {
      console.log(error);
    });
  }


}
exportAsXLSX(): void {
  this.proveedorService.exportToExcel(this.proveedor, 'my_export' );

}

}

