import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MyAppAuthComponent } from './my-app-auth/my-app-auth.component';
import {MatSlideToggle} from '@angular/material/slide-toggle';
import { CounterComponent } from './counter/counter.component';
import { FormPracticeComponent } from './form-practice/form-practice.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MyAppAuthComponent,
    MatSlideToggle,
    CounterComponent,
    FormPracticeComponent,
    HomeComponent,
    AboutComponent
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my_app';
  gotProfile(profile: any) {
    console.log(profile);
  }
}
