import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
// import { IntroductionComponent } from "../introduction/introduction.component";
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit{
 
  //contentItems = ['Introduction', 'Dropdown', 'Search Dropdown', 'Radio Button', 'Grid Table', 'List box', 'ToolTip', 'Toast']

  contentItems = {
    Introduction: "Introduction",
    DropDown: "DropDown",
    SearchDropdown: "Search Dropdown",
    ToolTip:'ToolTip',
    ListBox:'List Box',
    Toast:'Toast',
    // GridTable:'Grid Table',
    TextBox: "TextBox",
    RadioButton:"Radio Button",
  };
  compareFn = () => 0;

  ngOnInit(): void {
   
  }


}
