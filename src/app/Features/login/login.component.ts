import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent {

  loginForm = new FormGroup({
    usuario: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private router: Router,
              private loginService: LoginService) {
    
  }

  onSubmit() {

    if(this.loginForm.value.usuario != null && this.loginForm.value.password != null) {
      this.loginService.sendName(this.loginForm.value.usuario);
      this.router.navigate(['/profile'])
      
    } else {
      console.log('Error')
      
    }            
  }
}
