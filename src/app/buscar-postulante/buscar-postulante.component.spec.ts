import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarPostulanteComponent } from './buscar-postulante.component';

describe('BuscarPostulanteComponent', () => {
  let component: BuscarPostulanteComponent;
  let fixture: ComponentFixture<BuscarPostulanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarPostulanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarPostulanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
