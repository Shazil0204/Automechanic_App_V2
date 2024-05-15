import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component } from '@angular/core';

import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatCardModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private loginService: LoginService) {}

  // Form Controls
  usernameControl = new FormControl('', [Validators.required]);
  passwordControl = new FormControl('', [Validators.required]);


  // Form submit
  onSubmit(username: string, password: string) {
    
    if (this.usernameControl.valid || this.passwordControl.valid) {
      const loginData = { username, password };
      
      this.loginService.login(loginData).subscribe(
        response => {
          console.log('Login successful:', response);
        },
        error => {
          console.error('Login error:', error);
        });
      }
  }
}
