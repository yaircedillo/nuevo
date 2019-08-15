import { Component, OnInit } from '@angular/core';
import { Insumo } from 'src/app/interfaces/insumo';
import { InsumoService } from 'src/app/services/insumo.service';

@Component({
  selector: 'app-homeinsumo',
  templateUrl: './homeinsumo.component.html',
  styleUrls: ['./homeinsumo.component.css']
})
export class HomeinsumoComponent implements OnInit {
  insumo: Insumo[];
  filterPost = '';
  constructor(private insumoService: InsumoService ) {
  this.getInsumo();
}
getInsumo() {
  this.insumoService.get().subscribe((data: Insumo[]) => {
    this.insumo = data;
  }, (error) => {
    console.log(error);
    alert('Ocurrio un error');
  });
}
ngOnInit() {
}
delete(id_insumo) {
  if (confirm('Seguro de eliminar ??')) {
    this.insumoService.delete(id_insumo).subscribe( (data) => {
      alert('Dato Eliminado Correctamente');
      console.log(data);
      this.getInsumo();
    }, (error) => {
      console.log(error);
    });
  }


}

}
