import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { IUser } from '../interfaces/auth.interface';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css'],
})
export class IniciarSesionComponent {
  user: IUser = {
    email: '',
    password: '',
  };

  constructor(private authService: AuthService, private router: Router) {}

  /**
   *Esta funcion revisa si el email y password no esten sin llenar. Si estan sin llenar la funcion se cierra.
   *Si la primera validacion pasa, llama a la funcion signIn() que esta en service y hace el post al url con
   *el email y password e inicia sesion con el usuario.
   */
  login() {
    if (
      this.user.email.trim().length === 0 ||
      this.user.password.trim().length === 0
    ) {
      return;
    }
    // login
    this.authService.signIn(this.user.email, this.user.password).subscribe(
      () => {
        this.router.navigate(['/inicio']);
      },
      () => {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Error al iniciar sesion, intente de nuevo',
          showConfirmButton: false,
          timer: 2000,
        });
      }
    );
    this.user = {
      email: '',
      password: '',
    };
  }
}
