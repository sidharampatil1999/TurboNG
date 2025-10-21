import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./Components/header/header.component";
import { SidebarComponent } from "./Components/sidebar/sidebar.component";
import { IntroductionComponent } from "./Components/introduction/introduction.component";
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, SidebarComponent, IntroductionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TurboNgWebsite';
  @ViewChild('tempref') parentContainer!: ElementRef;
  constructor(private router: Router) { }
  ngAfterViewInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        if (this.parentContainer?.nativeElement) {
          this.parentContainer.nativeElement.scrollTop = 0;
        }
      });
  }
}
