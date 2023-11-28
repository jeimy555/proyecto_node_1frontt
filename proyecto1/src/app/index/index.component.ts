import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterComponent } from '../register/register.component';
import { PasswordComponent } from '../password/password.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, RegisterComponent,LoginComponent, PasswordComponent,IndexComponent, FormsModule, ReactiveFormsModule, RegisterComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  constructor(
    public route:Router,
  ) {
    
   
  }
  login() {
    this.route.navigateByUrl('/');
  }
  register() {
    this.route.navigateByUrl('/register');
  }

  password() {
    this.route.navigateByUrl('/password');
  }
}

