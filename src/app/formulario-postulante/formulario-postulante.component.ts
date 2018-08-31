import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {DateAdapter} from '@angular/material';
import {ObjFormacionAcademica} from '../model/obj-formacion-academica';
import {ObjCursosActProfesional} from '../model/obj-cursos-act-profesional';
import {ObjExpLaboral} from '../model/obj-exp-laboral';
import {ObjExpDocencia} from '../model/obj-exp-docencia';
import {ObjConocComp} from '../model/obj-conoc-comp';
import {ObjConocIdiomaNat} from '../model/obj-conoc-idioma-nat';
import {ObjRefPersonal} from '../model/obj-ref-personal';


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

  txtTituloObtenido;
  bolMostrarTituloObtenido = false;
  valorTexto;
  txtDesdeCursosAct;
  txtHastaCursosAct;
  txtUniversidadInstitCursAct;
  txtNombreCursosAct;
  txtNumHorasAct;

  txtTotalAniosLaboral = 0;
  txtDesdeExpLab;
  txtHastaExpLab;
  txtEmpInstExpLab;
  txtCargoEntExpLab;
  txtCargoSalExpLab;
  txtFuncionCargo;
  txtMateriaExpDoc;
  txtTitularSuplenteExpDoc;
  txtUniversidadExpDoc;
  txtSemestreContratExpDoc;
  txtDesdeExpDoc;
  txtHastaExpDoc;
  txtPaqueteComp;
  txtConCert;
  txtNivelConocimiento;
  txtIdiomaConoc;
  txtLeeConoc;
  txtHablaConoc;
  txtEscribeConoc;
  txtTieneCertConoc;

  txtNombresRefPers;
  txtEmpresaRefPers;
  txtCargoRefPers;
  txtTelefonosRefPers;

  txtPretensionSalarial;
  txtMensualPercibidoBs;


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
  funcionCargoControl = this.validacionServ();

  materiaExpDocControl = this.validacionServ();
  titularSuplenteExpDocControl = this.validacionServ();
  universidadExpDocControl = this.validacionServ();
  semestreContratExpDocControl = this.validacionServ();
  desdeExpDocControl = this.validacionServ();
  hastaExpDocControl = this.validacionServ();

  paqueteCompControl = this.validacionServ();
  conCertControl = this.validacionServ();
  nivelConocimientoControl = this.validacionServ();

  idiomaConocControl = this.validacionServ();
  leeConocControl = this.validacionServ();
  hablaConocControl = this.validacionServ();
  escribeConocControl = this.validacionServ();
  tieneCertConocControl = this.validacionServ();
  nombresRefPersControl = this.validacionServ();
  empresaRefPersControl = this.validacionServ();
  cargoRefPersControl = this.validacionServ();
  telefonosRefPersControl = this.validacionServ();
  pretensionSalarialControl = this.validacionServ();
  mensualPercibidoBsControl = this.validacionServ();

  lstFuncionesPrincipales: string[] = [];

  lstFomacionDoctoradoMaestria: ObjFormacionAcademica[] = [];
  lstNivelPostgradoDiplomadoEspecializacion: ObjFormacionAcademica[] = [];
  lstLicTecSupMedio: ObjFormacionAcademica[] = [];
  lstConcPlanEstudios: ObjFormacionAcademica[] = [];
  lstCursosActProfesional: ObjCursosActProfesional[] = [];

  lstExperienciaLaboralAreaEsp: ObjExpLaboral[] = [];
  lstExpDocencia: ObjExpDocencia[] = [];
  lstConocComp: ObjConocComp[] = [];
  lstIdiomasNativos: ObjConocIdiomaNat[] = [];
  lstReferenciasPers: ObjRefPersonal[] = [];


  url;

  constructor(private adapter: DateAdapter<any>) {
    this.valorTexto = 'valor';
    this.adapter.setLocale('es');
  }
  borrarFuncionesPrincipales(){
    this.lstFuncionesPrincipales = [];
  }
  addFuncionesPrincipales(){
    this.lstFuncionesPrincipales.push(this.txtFuncionCargo);
  }
  addExperienciaLaboral(){
    let lstLocal: string[] = [];
    lstLocal = this.lstFuncionesPrincipales;
    const expLaboralObj: ObjExpLaboral = new ObjExpLaboral(this.convertirFechas(this.txtDesdeExpLab),
      this.convertirFechas(this.txtHastaExpLab) , this.txtEmpInstExpLab,
      this.txtCargoEntExpLab, this.txtCargoSalExpLab, lstLocal);
    this.lstFuncionesPrincipales = [];
    this.lstExperienciaLaboralAreaEsp.push(expLaboralObj);
  }
  validacionServ() {
    return new FormControl('', [
      Validators.required
    ]);
  }

  ngOnInit() {
  }
  addConocIdiomasNativos(){
    const objIdiomasNativos: ObjConocIdiomaNat = new ObjConocIdiomaNat(this.txtIdiomaConoc, this.txtLeeConoc,
      this.txtHablaConoc, this.txtEscribeConoc, this.txtTieneCertConoc);
    this.lstIdiomasNativos.push(objIdiomasNativos);
  }
  addReferenciasPersonales(){
    const objRefPersonal: ObjRefPersonal = new ObjRefPersonal(this.txtNombresRefPers, this.txtEmpresaRefPers,
      this.txtCargoRefPers, this.txtTelefonosRefPers);
    this.lstReferenciasPers.push(objRefPersonal);
  }

  onFileChanged(event){
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (evento: ProgressEvent) => {
      this.url = (<FileReader>evento.target).result;
      console.log(this.url);
    };
    reader.readAsDataURL(file);
  }
  addExperienciaDocencia(){
    const objExpdocencia: ObjExpDocencia = new ObjExpDocencia(this.txtMateriaExpDoc, this.txtTitularSuplenteExpDoc,
      this.txtUniversidadExpDoc, this.txtSemestreContratExpDoc, this.convertirFechas(this.txtDesdeExpDoc),
      this.convertirFechas(this.txtHastaExpDoc));
    this.lstExpDocencia.push(objExpdocencia);
  }
  addConocimientosComp(){
    const objConocComp: ObjConocComp = new ObjConocComp(this.txtPaqueteComp, this.txtConCert, this.txtNivelConocimiento);
    this.lstConocComp.push(objConocComp);
  }
  convertirFechas(fecha: string): string{
    const fechaAConv = new Date(fecha);
    const fechaConv: string = fechaAConv.getDate() + '-' + (fechaAConv.getMonth() + 1)  + '-'
      + fechaAConv.getFullYear();
    return fechaConv;
  }
  addCurAct(){
    let objCuractProf: ObjCursosActProfesional;
    objCuractProf = new ObjCursosActProfesional(this.convertirFechas(this.txtDesdeCursosAct), this.convertirFechas(this.txtHastaCursosAct)
      , this.txtUniversidadInstitCursAct, this.txtNombreCursosAct, this.txtNumHorasAct);
    this.lstCursosActProfesional.push(objCuractProf);

  }
  addNiv() {
    const fechaDesdeString: string = this.convertirFechas(this.txtFechaDesde);
    const fechaHastaString: string = this.convertirFechas(this.txtFechaHasta);
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
    } else if (this.txtNivFormAcademica === '9') {

      const valorTituladoBooleano: boolean = this.txtTitulado === 'SI' ? true : false;
      objFormAcademica = new ObjFormacionAcademica(fechaDesdeString, fechaHastaString, this.txtUnivCentroEstudios,
        this.txtNomProgEstudiosGrid, this.txtTitulado, this.txtNivFormAcademica, '');
      this.lstConcPlanEstudios.push(objFormAcademica);
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

