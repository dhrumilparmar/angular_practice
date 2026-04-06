import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'my-app-auth',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule],
  templateUrl: './my-app-auth.component.html',
  styleUrl: './my-app-auth.component.scss'
})
export class MyAppAuthComponent {
  name: string = "Dhrumil";
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

}
