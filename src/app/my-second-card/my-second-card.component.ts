import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-second-card',
  templateUrl: './my-second-card.component.html',
  styleUrls: ['./my-second-card.component.scss']
})
export class MySecondCardComponent implements OnInit {
  friendsList: string[];
  constructor() { 
    this.friendsList =['Andrea', 'Bruno', 'Charlie', 'David', 'Elisa']
  }

  ngOnInit(): void {
    this.friendsList =['Andrea', 'Bruno', 'Charlie', 'David', 'Elisa']
  }

}
