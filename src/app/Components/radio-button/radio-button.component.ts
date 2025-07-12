import { Component } from '@angular/core';
import { TurboNGRadioButtoonComponent } from 'turbo-ng'
@Component({
  selector: 'app-radio-button',
  imports: [TurboNGRadioButtoonComponent],
  templateUrl: './radio-button.component.html',
  styleUrl: './radio-button.component.css'
})
export class RadioButtonComponent {

  ImportString = "import {TurboNGRadioButtoonComponent} from 'turbo-ng';"
  ImportArrayString = "imports: [TurboNGRadioButtoonComponent],"
  HtmlTag = '<turbo-ng-radio-buttoon\n\n      label="Male"\n      value="Male"\n      (selected)="getSeletedValue($event)"\n      [disabled]="true" >\n\n</turbo-ng-radio-buttoon>'
 

}
