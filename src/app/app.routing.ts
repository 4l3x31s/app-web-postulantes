
import {RouterModule, Routes} from '@angular/router';
import {FormularioPostulanteComponent} from './formulario-postulante/formulario-postulante.component';
import {InicioComponent} from './inicio/inicio.component';
import {BuscarPostulanteComponent} from './buscar-postulante/buscar-postulante.component';
import {ModuleWithProviders} from '@angular/core';
import {ExampleTableComponent} from './example-table/example-table.component';

const appRoutes: Routes = [
  {path: 'formulario', component: FormularioPostulanteComponent},
  {path: 'buscar', component: BuscarPostulanteComponent},
  {path: 'example', component: ExampleTableComponent},
  {path: '', component: InicioComponent},
  {path: '**', component: InicioComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
