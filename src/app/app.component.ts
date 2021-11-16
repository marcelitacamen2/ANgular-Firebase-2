import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  usuario = {
    Email: '',
    Contrasena: '',
  };

  constructor(private authService: AuthService) {}
  Ingresar() {
    const { Email, Contrasena } = this.usuario;
    console.log("El Usuario es: " + this.usuario.Email);
    console.log("La contraseña es: " + this.usuario.Contrasena);
    // this.authService.login(Email, Contrasena).then((res) => {
    //   console.log('se registro: ', res);
    // });
  }

  IngresarConGoogle() {
    const { Email, Contrasena } = this.usuario;
    console.log("El Usuario es: " + this.usuario.Email);
    console.log("La contraseña es: " + this.usuario.Contrasena);
    this.authService.loginWinthGoogle(Email, Contrasena).then((res) => {
      console.log('Ingreso Por Google');
    });
  }

  Logout() {
    this.authService.logout();
    console.log('Se Ha Finalizado La Sesion');
  }
}
