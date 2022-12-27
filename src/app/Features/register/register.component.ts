import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  formRegister = new FormGroup({
    email: new FormControl(''),
    userName: new FormControl(''),
    newPassword: new FormControl(''),
  });

  onSubmit() {
    console.log(this.formRegister.value);
  }
}
