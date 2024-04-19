import { Component } from '@angular/core';
import { HijoComentariosComponent } from '../hijo-comentarios/hijo-comentarios.component';

@Component({
  selector: 'app-padre-comentarios',
  standalone: true,
  imports: [HijoComentariosComponent],
  templateUrl: './padre-comentarios.component.html',
  styleUrl: './padre-comentarios.component.css'
})
export class PadreComentariosComponent {
  comentario: string[] = [];
  nuevoComentario: string = '';

  constructor() { }

  ngOnInit(): void {
    // Cargar comentarios desde un servicio o API
  }

  crearComentario(): void {
    if (this.nuevoComentario) {
      this.comentario.push(this.nuevoComentario);
      this.nuevoComentario = '';
    }
  }

  trackByComentario(index: number, comentario: string): string {
    return comentario;
  }
}
