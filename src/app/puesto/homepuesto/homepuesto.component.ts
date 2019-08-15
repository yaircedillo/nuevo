import { Component, OnInit } from '@angular/core';
import { Puesto } from 'src/app/interfaces/puesto';
import { PuestoService } from 'src/app/services/puesto.service';

@Component({
  selector: 'app-homepuesto',
  templateUrl: './homepuesto.component.html',
  styleUrls: ['./homepuesto.component.css']
})
export class HomepuestoComponent implements OnInit {
  puesto: Puesto[];
  filterPost = '';
  constructor(private puestoService: PuestoService ) {
  this.getPuesto();
}
getPuesto() {
  this.puestoService.get().subscribe((data: Puesto[]) => {
    this.puesto = data;
  }, (error) => {
    console.log(error);
    alert('Ocurrio un error');
  });
}
ngOnInit() {
}
delete(id_puesto) {
  if (confirm('Seguro de eliminar ??')) {
    this.puestoService.delete(id_puesto).subscribe( (data) => {
      alert('Dato Eliminado Correctamente');
      console.log(data);
      this.getPuesto();
    }, (error) => {
      console.log(error);
    });
  }


}

}
