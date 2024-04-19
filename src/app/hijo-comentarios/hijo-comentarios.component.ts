import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PadreComentariosComponent } from '../padre-comentarios/padre-comentarios.component';

@Component({
  selector: 'app-hijo-comentarios',
  standalone: true,
  imports: [FormsModule,CommonModule,PadreComentariosComponent],
  templateUrl: './hijo-comentarios.component.html',
  styleUrl: './hijo-comentarios.component.css'
})
export class HijoComentariosComponent {
  comentarios: string[] = [];
  nuevoComentario: string = '';

  constructor() { }

  ngOnInit(): void {
    // Cargar comentarios desde un servicio o API
  }

  crearComentario(): void {
    if (this.nuevoComentario) {
      this.comentarios.push(this.nuevoComentario);
      this.nuevoComentario = '';
    }
  }

  trackByComentario(index: number, comentario: string): string {
    return comentario;
  }
}
