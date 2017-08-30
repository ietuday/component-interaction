import { Component } from '@angular/core';

@Component({
  selector: 'app-name-parent',
  templateUrl: './name-parent.component.html',
  styleUrls: ['./name-parent.component.css']
})
export class NameParentComponent {
  // Displays 'Mr. IQ', '<no name set>', 'Bombasto'
  names = ['Mr. IQ', '   ', '  Bombasto  '];


}
