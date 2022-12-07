import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-params',
  templateUrl: './params.component.html',
  styleUrls: ['./params.component.css']
})
export class ParamsComponent {

  @Input() user: string = '';
  @Input() userData!: { email:string, role: string };
  
  nameComponet: string = 'ParamsComponent';

}
