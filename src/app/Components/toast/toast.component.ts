import { Component } from '@angular/core';
import { TurboNgToastComponent, TurboNgToastServiceService } from 'turbo-ng'

@Component({
  selector: 'app-toast',
  imports: [TurboNgToastComponent],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent {
  ImportString = "import { TurboNgToastComponent } from 'turbo-ng';"
  ImportString2 = "import { TurboNgToastServiceService } from 'turbo-ng';"
  ImportArrayString = "imports: [TurboNgToastComponent],"
  HtmlTag = '<button (click)="ClickSave()"> Save </button> \n<turbo-ng-toast></turbo-ng-toast>'
  ComponentTag = '<turbo-ng-toast></turbo-ng-toast>'
  constructor(private objToast: TurboNgToastServiceService) {

  }
  ClickSave() {
    this.objToast.showToast("Success", "Data saved Successfully. ")
  }

}
