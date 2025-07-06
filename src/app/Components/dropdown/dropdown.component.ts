import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TurboNGDropdownComponent } from 'turbo-ng'


@Component({
  selector: 'app-dropdown',
  imports: [TurboNGDropdownComponent],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent implements AfterViewInit {


  ngAfterViewInit(): void {
  }

  ImportString = "import {TurboNGDropdownComponent} from 'turbo-ng';"
  ImportArrayString = "imports: [TurboNGDropdownComponent],"
  ProvidedArray = ['Cricket', 'Football', 'Tennis', 'Golf', 'Badminton']
  HtmlTag = '<turbo-ng-dropdown\n\n      [ListItems]="ProvidedArray"\n      (GetSelectedValue)="getDropdownValue($event)"\n      DefaultValue= \'Cricket\'\n      class = "dropdowncss" >\n\n</turbo-ng-dropdown>'


}
