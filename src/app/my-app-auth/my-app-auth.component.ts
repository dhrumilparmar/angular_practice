import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {  CommonModule } from '@angular/common';
@Component({
  selector: 'my-app-auth',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, CommonModule],
  templateUrl: './my-app-auth.component.html',
  styleUrl: './my-app-auth.component.scss'
})
export class MyAppAuthComponent {
  name: string = "";
  colors: string = "red";
  hidden: boolean = false;
  colorarray: string[] = ['red'
    , 'blue', 'green', 'yellow', 'orange', 'purple']
  toggle (){
    this.hidden = !this.hidden;
  }

  changeColor(){
        this.colors = this.colorarray[Math.floor(Math.random() * this.colorarray.length)];
  }
  onSubmit(){
    alert("Form submitted successfully!");
    console.log(this.name);
  }

}
