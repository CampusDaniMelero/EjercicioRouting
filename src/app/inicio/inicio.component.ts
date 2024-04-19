import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BiografiaComponent } from '../biografia/biografia.component';
import { HijoComentariosComponent } from '../hijo-comentarios/hijo-comentarios.component';
import { PadreComentariosComponent } from '../padre-comentarios/padre-comentarios.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterOutlet , RouterLink, BiografiaComponent,HijoComentariosComponent,PadreComentariosComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
