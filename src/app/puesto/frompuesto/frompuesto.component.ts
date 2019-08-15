import { Component, OnInit } from '@angular/core';
import { Puesto } from 'src/app/interfaces/puesto';
import { PuestoService } from 'src/app/services/puesto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-frompuesto',
  templateUrl: './frompuesto.component.html',
  styleUrls: ['./frompuesto.component.css']
})
export class FrompuestoComponent implements OnInit {
  puesto: Puesto = {
    puesto: null
  };
  id_puesto: any;
  editing: boolean = false;
  puestos: Puesto[];
  constructor( private puestoService: PuestoService, private activatedRoute: ActivatedRoute) {
    this.id_puesto = this.activatedRoute.snapshot.params['id_puesto'];
   if (this.id_puesto) {
     this.editing = true;
     this.puestoService.get().subscribe((data: Puesto[]) => {
       this.puestos = data;
       this.puesto = this.puestos.find( (p) => { return p.id_puesto == this.id_puesto});
       console.log(this.puesto);
     }, (error) => {
       console.log(error);
     });
   } else {
    this.editing = false;
   }


  }

  ngOnInit() {
  }

  savePuesto() {
    if (this.editing) {
      this.puestoService.put(this.puesto).subscribe((data) => {
        alert('Datos Actualizados Correctamente. ');
        console.log(data);
      }, (error) => {
        console.log(error);
        alert('Ocurrio un error');
      });
    } else {
      this.puestoService.save(this.puesto).subscribe((data) => {
        alert('Datos Guardados Correctamente. ');
        console.log(data);
      }, (error) => {
        console.log(error);
        alert('Ocurrio un error');
      });
    }
  }

}
