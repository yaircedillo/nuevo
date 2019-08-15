import { Component, OnInit } from '@angular/core';
import { Unidad } from '../interfaces/unidad';
import { UnidadesService } from '../services/unidades.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.css']
})
export class FromComponent implements OnInit {
  unidad: Unidad = {
    medida: null
  };
  id_unidad: any;
  editing: boolean = false;
  unidades: Unidad[];
  constructor( private unidaService: UnidadesService, private activatedRoute: ActivatedRoute) {
    this.id_unidad = this.activatedRoute.snapshot.params['id_unidad'];
   if (this.id_unidad) {
     this.editing = true;
     this.unidaService.get().subscribe((data: Unidad[]) => {
       this.unidades = data;
       this.unidad = this.unidades.find( (u) => { return u.id_unidad == this.id_unidad});
       console.log(this.unidad);
     }, (error) => {
       console.log(error);
     });
   } else {
    this.editing = false;
   }


  }

  ngOnInit() {
  }

  saveUnidad() {
    if (this.editing) {
      this.unidaService.put(this.unidad).subscribe((data) => {
        alert('Datos Actualizados Correctamente. ');
        console.log(data);
      }, (error) => {
        console.log(error);
        alert('Ocurrio un error');
      });
    } else {
      this.unidaService.save(this.unidad).subscribe((data) => {
        alert('Datos Guardados Correctamente. ');
        console.log(data);
      }, (error) => {
        console.log(error);
        alert('Ocurrio un error');
      });
    }
  }

}
