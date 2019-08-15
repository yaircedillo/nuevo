import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fromusuario',
  templateUrl: './fromusuario.component.html',
  styleUrls: ['./fromusuario.component.css']
})
export class FromusuarioComponent implements OnInit {
  usuario: Usuario = {
    name: null,
    email: null,
    password: null,
    tipo: null,
    user: null
  };
  id: any;
  editing: boolean = false;
  usuarios: Usuario[];
  constructor( private usuarioService: UsuarioService, private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.params['id'];
   if (this.id) {
     this.editing = true;
     this.usuarioService.get().subscribe((data: Usuario[]) => {
       this.usuarios = data;
       this.usuario = this.usuarios.find( (p) => { return p.id == this.id});
       console.log(this.usuario);
     }, (error) => {
       console.log(error);
     });
   } else {
    this.editing = false;
   }


  }

  ngOnInit() {
  }

  saveUsuario() {
    if (this.editing) {
      this.usuarioService.put(this.usuario).subscribe((data) => {
        alert('Datos Actualizados Correctamente. ');
        console.log(data);
      }, (error) => {
        console.log(error);
        alert('Ocurrio un error');
      });
    } else {
      this.usuarioService.save(this.usuario).subscribe((data) => {
        alert('Datos Guardados Correctamente. ');
        console.log(data);
      }, (error) => {
        console.log(error);
        alert('Ocurrio un error');
      });
    }
  }

}
