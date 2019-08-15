import { Component, OnInit } from '@angular/core';
import { UnidadesService } from '../services/unidades.service';

import { Unidad } from '../interfaces/unidad';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  unidad: Unidad[];
  filterPost = '';
  constructor(private unidadesService: UnidadesService ) {
  this.getUnidades();
}


getUnidades() {
  this.unidadesService.get().subscribe((data: Unidad[]) => {
    this.unidad = data;
  }, (error) => {
    console.log(error);
    alert('Ocurrio un error');
  });
}
ngOnInit() {
}
delete(id_unidad) {
  if (confirm('Seguro de eliminar ??')) {
    this.unidadesService.delete(id_unidad).subscribe( (data) => {
      alert('Dato Eliminado Correctamente');
      console.log(data);
      this.getUnidades();
    }, (error) => {
      console.log(error);
    });
  }


}
exportAsXLSX(): void {
  this.unidadesService.exportToExcel(this.unidad, 'my_export' );

}



}
