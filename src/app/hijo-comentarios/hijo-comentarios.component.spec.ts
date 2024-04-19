import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoComentariosComponent } from './hijo-comentarios.component';

describe('HijoComentariosComponent', () => {
  let component: HijoComentariosComponent;
  let fixture: ComponentFixture<HijoComentariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HijoComentariosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HijoComentariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
