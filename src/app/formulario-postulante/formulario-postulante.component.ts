import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {DateAdapter} from '@angular/material';
import {ObjFormacionAcademica} from '../model/obj-formacion-academica';
import {ServicioListasService} from '../services/servicio-listas.service';
import {ObjCursosActProfesional} from "../model/obj-cursos-act-profesional";


@Component({
  selector: 'app-formulario-postulante',
  templateUrl: './formulario-postulante.component.html',
  styleUrls: ['./formulario-postulante.component.css']
})
export class FormularioPostulanteComponent implements OnInit {
  // Controls
  txtNroReferencia;
  txtNomCargoPostulacion;
  txtDepartamentoCiudad;
  txtApellidoPaterno;
  txtApMaterno;
  txtNombres;
  txtFechaNacimiento;
  txtNacionalidad;
  txtDomicilioActual;
  txtCI;
  txtExpedido;
  txtCiudadResidencia;
  txtTelefonoDomicilio;
  txtTelefonoCelular;
  txtGenero;
  txtNivelAcademico;
  txtNumRegProfesional;
  txtUniversidadInstitucion;
  txtNomProgEstudios;
  txtNivFormAcademica;
  txtFechaDesde;
  txtFechaHasta;
  txtUnivCentroEstudios;
  txtNomProgEstudiosGrid;
  txtTitulado;
  lstFomacionDoctoradoMaestria: ObjFormacionAcademica[] = [];
  lstNivelPostgradoDiplomadoEspecializacion: ObjFormacionAcademica[] = [];
  lstLicTecSupMedio: ObjFormacionAcademica[] = [];
  lstConcPlanEstudios: ObjFormacionAcademica[] = [];
  txtTituloObtenido;
  bolMostrarTituloObtenido = false;
  valorTexto;
  txtDesdeCursosAct;
  txtHastaCursosAct;
  txtUniversidadInstitCursAct;
  txtNombreCursosAct;
  txtNumHorasAct;
  lstCursosActProfesional: ObjCursosActProfesional[] = [];
  txtTotalAniosLaboral;
  txtDesdeExpLab;
  txtHastaExpLab;
  txtEmpInstExpLab;
  txtCargoEntExpLab;
  txtCargoSalExpLab;

  nroRefenciaControl = this.validacionServ();
  nomCargoControl = this.validacionServ();
  depCiudadControl = this.validacionServ();
  apPaternoControl = this.validacionServ();
  apMaternoControl = this.validacionServ();
  nombresControl = this.validacionServ();
  fechaNacControl = this.validacionServ();
  nacionalidadControl = this.validacionServ();
  domActualControl = this.validacionServ();
  ciControl = this.validacionServ();
  expedidoControl = this.validacionServ();
  ciudadResidenciaControl = this.validacionServ();
  telDomControl = this.validacionServ();
  telCelControl = this.validacionServ();
  generoControl = this.validacionServ();
  nivAcademControl = this.validacionServ();
  numRegProfControl = this.validacionServ();
  univInstitControl = this.validacionServ();
  nomProgEstControl = this.validacionServ();
  nivForAcademControl = this.validacionServ();
  fechaDesdeGridControl = this.validacionServ();
  fechaHastaGridControl = this.validacionServ();
  univCentEstudiosControl = this.validacionServ();
  nomProgEstudiosGrid = this.validacionServ();
  tituladoGrid = this.validacionServ();
  ctrlTitObtenido = this.validacionServ();

  desdeCursosActControl = this.validacionServ();
  hastaCursosActControl = this.validacionServ();
  universidadInstitCursActControl = this.validacionServ();
  bombreCursosActControl = this.validacionServ();
  numHorasActControl = this.validacionServ();
  totalAniosLaboral = this.validacionServ();

  desdeExpLab = this.validacionServ();
  hastaExpLab = this.validacionServ();
  empInstExpLab = this.validacionServ();
  cargoEntExpLab = this.validacionServ();
  cargoSalExpLab = this.validacionServ();

  displayedColumns: string[] = ['desdeFecha', 'hastaFecha', 'univCentEstudio', 'nombreProgramaEstudio', 'titulo'];
  displayedColumnsLicTM: string[] = ['desdeFecha', 'hastaFecha', 'univCentEstudio', 'nombreProgramaEstudio', 'tituloObtenido'];
  displaycolumnsActProf: string[] = ['desde', 'hasta', 'univInstituc', 'nomPuesto', 'numHoras'];
  dataSource = new ServicioListasService(this.lstFomacionDoctoradoMaestria);
  dataSourceDiploMadoEspec = new ServicioListasService(this.lstNivelPostgradoDiplomadoEspecializacion);
  dataSourceLicTec = new ServicioListasService(this.lstLicTecSupMedio);
  dataSourcePlanEstudios = new ServicioListasService(this.lstConcPlanEstudios);
  dataSourceCursosActoProfesional = new ServicioListasService(this.lstCursosActProfesional);


  constructor(private adapter: DateAdapter<any>) {
    this.valorTexto = 'valor';
    this.adapter.setLocale('es');
    this.lstFomacionDoctoradoMaestria = [ ];
  }
  validacionServ() {
    return new FormControl('', [
      Validators.required
    ]);
  }

  ngOnInit() {
  }
  addCurAct(){
    const fechaDesde = new Date(this.txtDesdeCursosAct);
    const fechaHasta = new Date(this.txtHastaCursosAct);
    const fechaDesdeString: string = fechaDesde.getDate() + '-' + (fechaDesde.getMonth() + 1)  + '-'
      + fechaDesde.getFullYear();
    const fechaHastaString: string = fechaHasta.getDate() + '-' + (fechaHasta.getMonth() + 1)  + '-'
      + fechaHasta.getFullYear();
    let objCuractProf: ObjCursosActProfesional;
    objCuractProf = new ObjCursosActProfesional(fechaDesdeString, fechaHastaString
      , this.txtUniversidadInstitCursAct, this.txtNombreCursosAct, this.txtNumHorasAct);

    this.lstCursosActProfesional.push(objCuractProf);
    this.dataSourceCursosActoProfesional.addRow(this.lstCursosActProfesional);
  }
  addNiv() {
    const fechaDesde = new Date(this.txtFechaDesde);
    const fechaHasta = new Date(this.txtFechaHasta);
    const fechaDesdeString: string = fechaDesde.getDate() + '-' + (fechaDesde.getMonth() + 1)  + '-'
      + fechaDesde.getFullYear();
    const fechaHastaString: string = fechaHasta.getDate() + '-' + (fechaHasta.getMonth() + 1)  + '-'
      + fechaHasta.getFullYear();
    console.log('***************************************************');
    console.log(fechaDesde.getDate() + '-' + (fechaDesde.getMonth() + 1)  + '-' + fechaDesde.getFullYear());
    let objFormAcademica: ObjFormacionAcademica;
    if (this.txtNivFormAcademica === '1' || this.txtNivFormAcademica === '2') {
      const listaValor: ObjFormacionAcademica[] = this.lstFomacionDoctoradoMaestria;
      const valorTituladoBooleano: boolean = this.txtTitulado === 'SI' ? true : false;
      const datoAcad = this.txtNivFormAcademica === '1' ? 'D' : 'M';
      objFormAcademica = new ObjFormacionAcademica(fechaDesdeString, fechaHastaString, this.txtUnivCentroEstudios,
        this.txtNomProgEstudiosGrid, this.txtTitulado, datoAcad, '');
      listaValor.push(objFormAcademica);
      this.lstFomacionDoctoradoMaestria = [];
      this.lstFomacionDoctoradoMaestria = listaValor;
      this.dataSource.addRow(this.lstFomacionDoctoradoMaestria);

    } else if (this.txtNivFormAcademica === '3' || this.txtNivFormAcademica === '4' || this.txtNivFormAcademica === '5') {
      const valorTituladoBooleano: boolean = this.txtTitulado === 'SI' ? true : false;
      let datoAcad;
      switch (this.txtNivFormAcademica) {
        case '3': {
          datoAcad = 'P';
          break;
        }
        case '4': {
          datoAcad = 'D';
          break;
        }
        case '5': {
          datoAcad = 'E';
          break;
        }
      }
      objFormAcademica = new ObjFormacionAcademica(fechaDesdeString, fechaHastaString, this.txtUnivCentroEstudios,
        this.txtNomProgEstudiosGrid, this.txtTitulado, datoAcad, '');
      this.lstNivelPostgradoDiplomadoEspecializacion.push(objFormAcademica);
      this.dataSourceDiploMadoEspec.addRow(this.lstNivelPostgradoDiplomadoEspecializacion);
    } else if (this.txtNivFormAcademica === '6' || this.txtNivFormAcademica === '7' || this.txtNivFormAcademica === '8') {
      let datoAcad;
      switch (this.txtNivFormAcademica) {
        case '6': {
          datoAcad = 'L';
          break;
        }
        case '7': {
          datoAcad = 'TS';
          break;
        }
        case '8': {
          datoAcad = 'TM';
          break;
        }
      }
      objFormAcademica = new ObjFormacionAcademica(fechaDesdeString, fechaHastaString, this.txtUnivCentroEstudios,
        this.txtNomProgEstudiosGrid, '', datoAcad, this.txtTituloObtenido);
      this.lstLicTecSupMedio.push(objFormAcademica);
      this.dataSourceLicTec.addRow(this.lstLicTecSupMedio);
    } else if (this.txtNivFormAcademica === '9') {

      const valorTituladoBooleano: boolean = this.txtTitulado === 'SI' ? true : false;
      objFormAcademica = new ObjFormacionAcademica(fechaDesdeString, fechaHastaString, this.txtUnivCentroEstudios,
        this.txtNomProgEstudiosGrid, this.txtTitulado, this.txtNivFormAcademica, '');
      this.lstConcPlanEstudios.push(objFormAcademica);
      this.dataSourcePlanEstudios.addRow(this.lstConcPlanEstudios);
    }
    console.log(this.lstFomacionDoctoradoMaestria);
  }
  cambiarDato() {
    if (this.txtNivFormAcademica === '6' || this.txtNivFormAcademica === '7' || this.txtNivFormAcademica === '8') {
      this.bolMostrarTituloObtenido = true;
    } else {
      this.bolMostrarTituloObtenido = false;
    }
  }
}

