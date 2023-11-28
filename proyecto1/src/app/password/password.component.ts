import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { IndexComponent } from '../index/index.component';

@Component({
  selector: 'app-password',
  standalone: true,
  imports: [CommonModule, RegisterComponent, LoginComponent,IndexComponent, FormsModule, ReactiveFormsModule, RegisterComponent],
  templateUrl: './password.component.html',
  styleUrl: './password.component.css'
})
export class PasswordComponent {
  form: FormGroup;
  constructor(
    public route:Router,
  ){
    this.form = new FormGroup({
    correo: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    password2: new FormControl('',Validators.required),
    
  });

  }
  enviar(){
    const correoValue = this.form.get('correo')?.value;
    const passwordValue = this.form.get('password')?.value;
    const password2Value = this.form.get('password2')?.value;
    const datoslogin = localStorage.getItem('usuario');
    if(datoslogin){
      const datos = JSON.parse(datoslogin);
      console.log(correoValue+" "+passwordValue);
      if (correoValue==datos.correo) {
        console.log("correo encontrado"); 
        if (passwordValue==password2Value) {
          const formulario=this.form.value
          localStorage.setItem('usuario',JSON.stringify(formulario))
          console.log("registrado")
          this.route.navigateByUrl('/');
        }else{
          console.log("las contraseñas no coinciden");
          this.route.navigateByUrl('/password');
        }
        
      }else{
          console.log("correo NO encontrado");
          this.route.navigateByUrl('/password');
        }
    
    }

  }
  login() {
    this.route.navigateByUrl('/');
  }

  register() {
    this.route.navigateByUrl('/register');
  }
}
