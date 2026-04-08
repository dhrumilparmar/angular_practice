import { Component } from '@angular/core';
import { FormPracticeComponent } from '../form-practice/form-practice.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormPracticeComponent,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  show: boolean = false;
users = [
  { name: 'Dev', price: 100, date: new Date('2018/1/1') },
  { name: 'User2', price: 200, date: new Date('2019/2/2') },
  { name: 'User3', price: 300, date: new Date('2020/3/3') }
];

isloading: boolean = true;
toggle(){
  this.isloading = !this.isloading;
}

print(value: string) {
  console.log('Input value:', value);
}



}
