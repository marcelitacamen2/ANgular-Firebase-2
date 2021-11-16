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
    console.log(this.usuario);
    const { Email, Contrasena } = this.usuario;
    this.authService.login(Email, Contrasena).then((res) => {
      console.log('se registro: ', res);
    });
  }
  IngresarConGoogle() {
    const { Email, Contrasena } = this.usuario;
    this.authService.loginWinthGoogle(Email, Contrasena).then((res) => {
      console.log('se registro: ', res);
    });
  }
  Logout() {
    this.authService.logout();
  }
}
