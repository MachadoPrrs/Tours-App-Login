import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firebaseConfig } from 'src/app/config/config.firebase';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  /**
   * Esta funcion toma un email y una contraseña como parametros, crea un request object
   * y envia ese request a firebase API.
   * Hace un post a firebase para crear un usuario
   * @param {string} email - string - El email del usuario.
   * @param {string} password - string - La contraseña del usuario.
   */
  signUp(email: string, password: string) {
    const req = { email: email, password: password };
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${firebaseConfig.apiKey}`;

    return this.http.post(url, req);
  }

  /**
   * Esta funcion toma un email y una contraseña como parametros, crea un request object
   * y envia ese request a firebase API.
   * Hace un post a firebase para iniciar sesion con los datos del usuario
   * @param {string} email - string - El email del usuario.
   * @param {string} password - string - La contraseña del usuario.
   */
  signIn(email: string, password: string) {
    const req = { email: email, password: password };
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${firebaseConfig.apiKey}`;

    return this.http.post(url, req);
  }
}
