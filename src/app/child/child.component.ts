import { Component, Input } from '@angular/core';
 
import { Hero } from '../hero';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  // @Input() hero;
  // @Input('master') masterName: string;

  private _name = '';
 
  @Input()
  set name(name: string) {
    this._name = (name && name.trim()) || '<no name set>';
  }
 
  get name(): string { return this._name; }

}
