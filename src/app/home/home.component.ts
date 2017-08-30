import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name: string = "uday";

    constructor() {
    this.name = 'Max'
  }

  ngOnInit() {
  }
  
  sayMyName() {
    console.log('My name is', this.name)
  }

}
