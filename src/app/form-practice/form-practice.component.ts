import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-form-practice',
  standalone: true,
  imports: [ReactiveFormsModule, MatIconModule, MatDividerModule, MatButtonModule],
  templateUrl: './form-practice.component.html',
  styleUrl: './form-practice.component.scss'
})
export class FormPracticeComponent {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    age: new FormControl('')
  });

onSubmit() {
  const formData = this.loginForm.value;
  console.log(formData);
}


}
