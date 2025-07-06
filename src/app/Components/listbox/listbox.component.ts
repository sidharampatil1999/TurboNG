import { Component } from '@angular/core';
import { TurboNgListboxComponent } from 'turbo-ng'

@Component({
  selector: 'app-listbox',
  imports: [TurboNgListboxComponent],
  templateUrl: './listbox.component.html',
  styleUrl: './listbox.component.css'
})
export class ListboxComponent {
  LeftArray = ['Mr.Audrey', 'Mr.Brandon', 'Ms.Olivia', 'Mr.Cameron']
  RightArray = ['Mr.Jonathan', 'Ms.Lily', 'Mr.Richard', 'Ms.Sally', 'Mr.Thomas','Mr.Eric']
  ImportString = "import {TurboNgListboxComponent} from 'turbo-ng';"
  ImportArrayString = "imports: [TurboNgListboxComponent],"
  HtmlTag = '<turbo-ng-listbox\n\n      [leftArray]="LeftArray"\n      [rightArray]="RightArray"\n      class="listbox">\n\n</turbo-ng-listbox>'


}
