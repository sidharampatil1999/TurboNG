import { Component } from '@angular/core';
import { TurboNgTooltipComponent } from 'turbo-ng'

@Component({
  selector: 'app-tooltip',
  imports: [TurboNgTooltipComponent],
  templateUrl: './tooltip.component.html',
  styleUrl: './tooltip.component.css'
})
export class TooltipComponent {
  ImportString = "import {TurboNgTooltipComponent} from 'turbo-ng';"
  ImportArrayString = "imports: [TurboNgTooltipComponent],"
  HtmlTag = '<turbo-ng-tooltip text= "The tooltip will be visible above the text box." position="top" class="tooltiptag">\n\n       <input type="text" value="The tooltip will be visible above the text box.">\n\n </turbo-ng-tooltip>'

}
