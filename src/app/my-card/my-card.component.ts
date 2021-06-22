import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-card',
  templateUrl: './my-card.component.html',
  styleUrls: ['./my-card.component.scss']
})

export class MyCardComponent implements OnInit {
  name: string;
  carSelected: string;

  constructor() { 
    this.name = ' ';
    this.carSelected= ' ';
  }

  ngOnInit(): void {
    this.name = 'Karla';
    this.carSelected = ' '
  }

}
