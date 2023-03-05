import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearCuentaComponent } from './auth/crear-cuenta/crear-cuenta.component';
import { IniciarSesionComponent } from './auth/iniciar-sesion/iniciar-sesion.component';
import { MainPageComponent } from './home/main-page/main-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'crear-cuenta', pathMatch: 'full' },
  { path: 'crear-cuenta', component: CrearCuentaComponent },
  { path: 'iniciar-sesion', component: IniciarSesionComponent },
  { path: 'inicio', component: MainPageComponent },
  { path: '**', redirectTo: 'crear-cuenta', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
