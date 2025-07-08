import {   Routes } from '@angular/router';
import { IntroductionComponent } from './Components/introduction/introduction.component';
import { DropdownComponent } from './Components/dropdown/dropdown.component';
import { SearchDropdownComponent } from './Components/search-dropdown/search-dropdown.component';
import { TooltipComponent } from './Components/tooltip/tooltip.component';
import { ListboxComponent } from './Components/listbox/listbox.component';
import { ToastComponent } from './Components/toast/toast.component';
import { GridTableComponent } from './Components/grid-table/grid-table.component';
import { TextBoxComponent } from './Components/text-box/text-box.component';
import { RadioButtonComponent } from './Components/radio-button/radio-button.component';

export const routes: Routes = [
    {path:'',redirectTo:'Introduction',pathMatch:'full'},
    {path:'Introduction', component:IntroductionComponent},
    {path:'DropDown',component:DropdownComponent},
    {path:'SearchDropdown',component:SearchDropdownComponent},
    {path:'ToolTip',component:TooltipComponent},
    {path:'ListBox',component:ListboxComponent},
    {path:'Toast',component:ToastComponent},
    {path:'TextBox',component:TextBoxComponent},
    {path:'RadioButton',component:RadioButtonComponent},



];

 