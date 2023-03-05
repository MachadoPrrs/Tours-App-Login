import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { Routes, RouterModule } from '@angular/router';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { MainPageComponent } from '../home/main-page/main-page.component';

const routes: Routes = [
  { path: 'iniciar-sesion', component: IniciarSesionComponent },
  { path: 'crear-cuenta', component: CrearCuentaComponent },
  { path: 'inicio', component: MainPageComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
