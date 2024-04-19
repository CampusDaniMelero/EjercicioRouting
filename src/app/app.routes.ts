import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { BiografiaComponent } from './biografia/biografia.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { PadreComentariosComponent } from './padre-comentarios/padre-comentarios.component';
import { HijoComentariosComponent } from './hijo-comentarios/hijo-comentarios.component';
export const routes: Routes = [
   {path: 'inicio', component: InicioComponent},
   {path:'biografia', component: BiografiaComponent},
   {path:'ubicacion', component: UbicacionComponent},
   {path: 'comentario', component: HijoComentariosComponent},


    
]