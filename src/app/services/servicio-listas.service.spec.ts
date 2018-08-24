import { TestBed, inject } from '@angular/core/testing';

import { ServicioListasService } from './servicio-listas.service';

describe('ServicioListasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicioListasService]
    });
  });

  it('should be created', inject([ServicioListasService], (service: ServicioListasService) => {
    expect(service).toBeTruthy();
  }));
});
