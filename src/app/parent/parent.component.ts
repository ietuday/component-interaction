import { Component } from '@angular/core';
 
import { HEROES } from '../hero';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent{
  heroes = HEROES;
  master = 'Master';
  names = ['Mr. IQ', '   ', '  Bombasto  '];
  constructor() { }


}
