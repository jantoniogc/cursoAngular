import { TestBed } from '@angular/core/testing';

import { Prueba2Service } from './prueba2.service';

describe('Prueba2Service', () => {
  let service: Prueba2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Prueba2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
