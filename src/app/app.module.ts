// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//firebase
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

// custom components
import { NavbarComponent } from './navbar/navbar.component';
import { AgregarClienteComponent } from './agregarcliente/agregarcliente.component';
import { AgregarUsuarioComponent } from './agregarusuario/agregarusuario.component';
import { AgregarPDFComponent } from './agregarpdf/agregarpdf.component';
import { HeadComponent } from './head/head.component';
import { ScriptsComponent } from './scripts/script.component'
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component'; 
import { FooterComponent } from './footer/footer.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ClientesComponent } from './clientes/clientes.component';
import { CatalogoComponent } from './catalogo/catalogo.component';


import { AppComponent } from './app.component';

// Routes
import { RouterModule, Routes } from '@angular/router';
import { AppRouter } from './commons/app.routing.module';

// Services





// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyCoKkOKzDOX_tW7DGm4p-zLv8FlzyvIwqs",
  authDomain: "trulo-a71ab.firebaseapp.com",
  databaseURL: "https://trulo-a71ab.firebaseio.com/",
  storageBucket: "trulo-a71ab.appspot.com",
  messagingSenderId: "818111494052"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AgregarClienteComponent,
    AgregarUsuarioComponent,
    AgregarPDFComponent,
    HeadComponent,
    ScriptsComponent,
    SidebarComponent,
    ContentComponent,
    FooterComponent,
    UsuariosComponent,
    ClientesComponent,
    CatalogoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(AppRouter),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  providers: [],
  bootstrap: [AppComponent, HeadComponent]
})
export class AppModule { }
