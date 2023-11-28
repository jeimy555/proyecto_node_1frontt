import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { PasswordComponent } from '../password/password.component';
import { IndexComponent } from '../index/index.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RegisterComponent, PasswordComponent,IndexComponent, FormsModule, ReactiveFormsModule, LoginComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  form: FormGroup;
  constructor(
    public route:Router,
  ){
    this.form = new FormGroup({
    correo: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    password2: new FormControl('',Validators.required)
  });
  

       
    

  

  }
  enviar() {
    const passwordValue = this.form.get('password')?.value;
    const password2Value = this.form.get('password2')?.value;
    if (passwordValue==password2Value) {
      
    const formulario=this.form.value
    localStorage.setItem('usuario',JSON.stringify(formulario));
    console.log(this.form.value);
    this.route.navigateByUrl('/');
    }else{console.log("las contraseñas no coinciden");
    this.route.navigateByUrl('/register');
  }
       
    
  
    
    
  
  

  }
  password() {
    this.route.navigateByUrl('/password');
  }
  login() {
    this.route.navigateByUrl('/');
  }


}
