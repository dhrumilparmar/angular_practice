import { Component, Output, EventEmitter} from '@angular/core';
import { FormPracticeComponent } from '../form-practice/form-practice.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormPracticeComponent,
    CommonModule,
    FormsModule
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
isActive:boolean = true;

isloading: boolean = true;
toggle(){
  this.isloading = !this.isloading;
}

print(value: string) {
  console.log('Input value:', value);
}
name:string="";

toggle2(){
  this.isActive = !this.isActive;
  
}

toggleColor(){
  this.isRed = !this.isRed;
}

isRed:boolean = true;

profile={
  "name": "Dhrumil",
  "age": 22,
  "city": "vadodara"
}
  @Output() sendProfile = new EventEmitter<object>();

  sendProfileData(){
    this.sendProfile.emit(this.profile);
  }

}
