import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-homeusuario',
  templateUrl: './homeusuario.component.html',
  styleUrls: ['./homeusuario.component.css']
})
export class HomeusuarioComponent implements OnInit {
  usuario: Usuario[];
  filterPost = '';
  resultPosts: any ;
  constructor(private usuarioService: UsuarioService ) {
  this.getUsuario();
}
getUsuario() {
  this.usuarioService.get().subscribe((data: Usuario[]) => {
    this.usuario = data;
  }, (error) => {
    console.log(error);
    alert('Ocurrio un error');
  });
}
ngOnInit() {
}
delete(id) {
  if (confirm('Seguro de eliminar ??')) {
    this.usuarioService.delete(id).subscribe( (data) => {
      alert('Dato Eliminado Correctamente');
      console.log(data);
      this.getUsuario();
    }, (error) => {
      console.log(error);
    });
  }
}

exportAsXLSX(): void {
  this.usuarioService.exportToExcel(this.usuario , 'Reporte' );
}

exportAsXLSXFilter(): void {
  this.usuarioService.exportToExcel(this.usuario, 'Reporte' );
}



}

