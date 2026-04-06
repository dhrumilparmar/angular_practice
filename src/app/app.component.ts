import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyAppAuthComponent } from './my-app-auth/my-app-auth.component';
import {MatSlideToggle} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    MyAppAuthComponent,
    MatSlideToggle
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my_app';
}
