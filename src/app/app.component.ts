import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyAppAuthComponent } from './my-app-auth/my-app-auth.component';
import {MatSlideToggle} from '@angular/material/slide-toggle';
import { CounterComponent } from './counter/counter.component';
import { FormPracticeComponent } from './form-practice/form-practice.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    MyAppAuthComponent,
    MatSlideToggle,
    CounterComponent,
    FormPracticeComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my_app';
}
