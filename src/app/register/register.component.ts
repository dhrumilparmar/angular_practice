import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
    phone: new FormControl(''),
    email: new FormControl(''),
    createPassword: new FormControl('',[Validators.required, Validators.minLength(6), Validators.maxLength(10)]),
    confirmPassword: new FormControl('',[])
  })
  
  checkPassword(){


}
}
