import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormularioPostulanteComponent } from './formulario-postulante/formulario-postulante.component';
import { BuscarPostulanteComponent } from './buscar-postulante/buscar-postulante.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {appRoutingProviders, routing} from './app.routing';

import { ExampleTableComponent } from './example-table/example-table.component';

import {AngularMaterialModule} from './angular-material-module';

@NgModule({
  declarations: [
    AppComponent,
    FormularioPostulanteComponent,
    BuscarPostulanteComponent,
    InicioComponent,
    LoginComponent,
    ExampleTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing,
    AngularMaterialModule

  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
