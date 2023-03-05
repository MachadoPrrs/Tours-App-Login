import { Component } from '@angular/core';
import { IUser } from '../interfaces/auth.interface';
import Swal from 'sweetalert2';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.css'],
})
export class CrearCuentaComponent {
  // usar la inferzas de usuario
  user: IUser = {
    email: '',
    password: '',
  };

  // llamar el ctor para usar los serivicos del API
  constructor(private authService: AuthService) {}

  /**
   *Esta funcion revisa si el email y password no esten sin llenar. Si estan sin llenar la funcion se cierra.
   *Si la primera validacion pasa, llama a la funcion signUp() que esta en service y hace el post al url con
   *el email y password y crea el usuario
   */
  agregar() {
    if (
      this.user.email.trim().length === 0 ||
      this.user.password.trim().length === 0
    ) {
      return;
    }

    this.authService.signUp(this.user.email, this.user.password).subscribe(
      () => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Registrado con exito',
          showConfirmButton: false,
          timer: 2000,
        });
        //this.router.navigate(['/signin']);
      },
      (err) => {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'No se pudo registrar, Intentelo de nuevo',
          showConfirmButton: false,
          timer: 2000,
        });
        console.log(err);
      }
    );

    this.user = {
      email: '',
      password: '',
    };
  }
}
