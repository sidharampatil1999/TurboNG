import { Component } from '@angular/core';
import { TurboNgSearchDropdownComponent } from 'turbo-ng'

@Component({
  selector: 'app-search-dropdown',
  imports: [TurboNgSearchDropdownComponent],
  templateUrl: './search-dropdown.component.html',
  styleUrl: './search-dropdown.component.css'
})
export class SearchDropdownComponent {
  ProvidedArray = ['Cricket', 'Football', 'Tennis', 'Golf', 'Badminton']
  ImportString="import { TurboNgSearchDropdownComponent } from 'turbo-ng';"
  ImportArrayString ="imports: [TurboNgSearchDropdownComponent],"
  HtmlTag = '<turbo-ng-search-dropdown\n\n     [ListItem]="ProvidedArray"\n     (GetSelectedValue)="getSearchDropdownValue($event)"\n     DefaultValue="Football"\n     class="searchdropdown" >\n\n</turbo-ng-search-dropdown>'


  
}
