import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjeccionServiciosComponent } from './injeccion-servicios.component';

describe('InjeccionServiciosComponent', () => {
  let component: InjeccionServiciosComponent;
  let fixture: ComponentFixture<InjeccionServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InjeccionServiciosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InjeccionServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
