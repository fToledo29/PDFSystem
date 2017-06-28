import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgregarClienteComponent } from '../agregarcliente/agregarcliente.component';
import { AgregarUsuarioComponent } from '../agregarusuario/agregarusuario.component'; 
import { UsuariosComponent } from '../usuarios/usuarios.component';
import { ClientesComponent } from '../clientes/clientes.component';
import { AgregarPDFComponent } from '../agregarpdf/agregarpdf.component';
import { CatalogoComponent } from '../catalogo/catalogo.component';
import { ContentComponent } from '../content/content.component';

export const AppRouter: Routes = [
    { path: 'agregarcliente', component: AgregarClienteComponent },
    { path: 'agregarusuario', component: AgregarUsuarioComponent },
    { path: 'usuarios', component: UsuariosComponent },
    { path: 'clientes', component: ClientesComponent },
    { path: 'agregarpdf', component: AgregarPDFComponent },
    { path: 'catalogo', component: CatalogoComponent },
    { path: '', component: ContentComponent}
];
