import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { AuthService } from './auth.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  usuario: Usuario = new Usuario();

  constructor(private authService: AuthService){}

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  fazerLogin(){
    this.authService.fazerLogin(this.usuario);
  }
}
