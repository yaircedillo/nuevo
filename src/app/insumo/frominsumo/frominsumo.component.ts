import { Component, OnInit } from '@angular/core';
import { Insumo } from 'src/app/interfaces/insumo';
import { InsumoService } from 'src/app/services/insumo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-frominsumo',
  templateUrl: './frominsumo.component.html',
  styleUrls: ['./frominsumo.component.css']
})
export class FrominsumoComponent implements OnInit {
  insumo: Insumo = {
    nombre: null,
    precio: null
  };
  id_insumo: any;
  editing: boolean = false;
  insumos: Insumo[];
  constructor( private insumoService: InsumoService, private activatedRoute: ActivatedRoute) {
    this.id_insumo = this.activatedRoute.snapshot.params['id_insumo'];
   if (this.id_insumo) {
     this.editing = true;
     this.insumoService.get().subscribe((data: Insumo[]) => {
       this.insumos = data;
       this.insumo = this.insumos.find( (i) => { return i.id_insumo == this.id_insumo});
       console.log(this.insumo);
     }, (error) => {
       console.log(error);
     });
   } else {
    this.editing = false;
   }


  }

  ngOnInit() {
  }

  saveInsumo() {
    if (this.editing) {
      this.insumoService.put(this.insumo).subscribe((data) => {
        alert('Datos Actualizados Correctamente. ');
        console.log(data);
      }, (error) => {
        console.log(error);
        alert('Ocurrio un error');
      });
    } else {
      this.insumoService.save(this.insumo).subscribe((data) => {
        alert('Datos Guardados Correctamente. ');
        console.log(data);
      }, (error) => {
        console.log(error);
        alert('Ocurrio un error');
      });
    }
  }

}
