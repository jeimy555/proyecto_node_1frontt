import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterComponent } from '../register/register.component';
import { PasswordComponent } from '../password/password.component';
import { IndexComponent } from '../index/index.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RegisterComponent, PasswordComponent,IndexComponent, FormsModule, ReactiveFormsModule, RegisterComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  Mensaje: String = "Ingresar Datos";
  form: FormGroup;

  constructor(
    public route:Router,
  ) {
    this.form = new FormGroup({
      correo: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    });
   
  }

  register() {
    this.route.navigateByUrl('/register');
  }

  password() {
    this.route.navigateByUrl('/password');
  }

  enviar() {
   
    console.log(this.form.value);
    const correoValue = this.form.get('correo')?.value;
    const passwordValue = this.form.get('password')?.value;

    const datoslogin = localStorage.getItem('usuario')

    if(datoslogin){
      const datos = JSON.parse(datoslogin);
      console.log(correoValue+" "+passwordValue);

      if (correoValue === datos.correo && passwordValue === datos.password) {
        this.Mensaje = 'Credenciales correctas';
        this.route.navigateByUrl('/index');
        console.log('Credenciales correctas');
      } else {
        this.Mensaje = 'Credenciales incorrectas';
        console.log('Credenciales incorrectas');
      }

    }

   

  }
}
 