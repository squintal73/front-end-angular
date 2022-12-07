import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  show: boolean = false;

  showMe(): void{
    this.show = !this.show;
  }
  size = 40;
  font = 'Arial';
  color = 'red';
}
