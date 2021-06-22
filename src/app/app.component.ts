import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  value: number;
  date: Date;
  name: string;


  constructor(){
    this.value = 1.94141;
    this.date = new Date();
    this.name = 'Kify';
  }
}
