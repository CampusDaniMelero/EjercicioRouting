import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreComentariosComponent } from './padre-comentarios.component';

describe('PadreComentariosComponent', () => {
  let component: PadreComentariosComponent;
  let fixture: ComponentFixture<PadreComentariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PadreComentariosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PadreComentariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
