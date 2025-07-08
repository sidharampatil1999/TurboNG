import { Component } from '@angular/core';
import { TurboNgTextboxComponent } from 'turbo-ng'


@Component({
  selector: 'app-text-box',
  imports: [TurboNgTextboxComponent],
  templateUrl: './text-box.component.html',
  styleUrl: './text-box.component.css'
})
export class TextBoxComponent {
  ImportString = "import {TurboNgTextboxComponent} from 'turbo-ng';"
  ImportArrayString = "imports: [TurboNgTextboxComponent],"
  HtmlTag = '<turbo-ng-textbox\n      (GetTextData)="GetTextBoxData($event)"\n      PlaceHolder="UserId\n      [MandatoryField]="true"\n      class="textbox" >\n</turbo-ng-textbox>' 

}
