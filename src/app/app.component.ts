import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { HijoComentariosComponent } from './hijo-comentarios/hijo-comentarios.component';
import { PadreComentariosComponent } from './padre-comentarios/padre-comentarios.component';
import { BiografiaComponent } from './biografia/biografia.component';
import { InicioComponent } from './inicio/inicio.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,FormsModule,RouterLink ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EjercicioRouting';
}
