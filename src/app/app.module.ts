import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FromComponent } from './from/from.component';
import { RouterModule, Route } from '@angular/router';
import { HttpClientModule  } from '@angular/common/http';
import { FormsModule  } from '@angular/forms';

import { HomeprovComponent } from './proveedor/homeprov/homeprov.component';
import { FormprovComponent } from './proveedor/formprov/formprov.component';
import { HomeclientComponent } from './clientes/homeclient/homeclient.component';
import { FromclientComponent } from './clientes/fromclient/fromclient.component';
import { FrompuestoComponent } from './puesto/frompuesto/frompuesto.component';
import { HomepuestoComponent } from './puesto/homepuesto/homepuesto.component';
import { HomeinsumoComponent } from './insumo/homeinsumo/homeinsumo.component';
import { FrominsumoComponent } from './insumo/frominsumo/frominsumo.component';
import { FromusuarioComponent } from './usuario/fromusuario/fromusuario.component';
import { HomeusuarioComponent } from './usuario/homeusuario/homeusuario.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ProveedorPipe } from './pipes/proveedor.pipe';
import { ClientesPipe } from './pipes/clientes.pipe';
import { PuestoPipe } from './pipes/puesto.pipe';
import { InsumoPipe } from './pipes/insumo.pipe';
import { UsuarioPipe } from './pipes/usuario.pipe';
import { UnidadesService } from './services/unidades.service';
import { ProveedorService } from './services/proveedor.service';
import { UsuarioService } from './services/usuario.service';
// import * as jsPDF from 'jspdf';
// import { UnidadPipe } from './unidad.pipe';



const routes: Route [] = [
  // unidades
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'form', component: FromComponent},
  {path: 'form/:id_unidad', component: FromComponent},

  // proveedor
  {path: 'proveedor/home', component: HomeprovComponent},
  {path: 'proveedor/form', component: FormprovComponent},
  {path: 'proveedor/form/:id_proveedores', component: FormprovComponent},

   // Clientes
   {path: 'clientes/home', component: HomeclientComponent},
   {path: 'clientes/form', component: FromclientComponent},
   {path: 'clientes/form/:id_cliente', component: FromclientComponent},
   // Puesto
   {path: 'puesto/home', component: HomepuestoComponent},
   {path: 'puesto/form', component: FrompuestoComponent},
   {path: 'puesto/form/:id_puesto', component: FrompuestoComponent},
   // Insumo
   {path: 'insumo/home', component: HomeinsumoComponent},
   {path: 'insumo/form', component: FrominsumoComponent},
   {path: 'insumo/form/:id_insumo', component: FrominsumoComponent},
     // Insumo
     {path: 'usuario/home', component: HomeusuarioComponent},
     {path: 'usuario/form', component: FromusuarioComponent},
     {path: 'usuario/form/:id', component: FromusuarioComponent}


];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FromComponent,
    HomeprovComponent,
    FormprovComponent,
    HomeclientComponent,
    FromclientComponent,
    FrompuestoComponent,
    HomepuestoComponent,
    HomeinsumoComponent,
    FrominsumoComponent,
    FromusuarioComponent,
    HomeusuarioComponent,
    FilterPipe,
    ProveedorPipe,
    ClientesPipe,
    PuestoPipe,
    InsumoPipe,
    UsuarioPipe,
   // UnidadPipe

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule

  ],
  providers: [
    UnidadesService,
    ProveedorService,
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
