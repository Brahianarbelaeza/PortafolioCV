import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../env/enviroment';
import { ThemeService } from '../../services/theme.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  isDarkMode = true;
  themeStyles: any = {};
  private subscription: Subscription = new Subscription();

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.setDarkMode(true); // Opcional, fuerza modo claro al iniciar

    this.subscription = this.themeService.isDarkMode$.subscribe((isDark) => {
      this.isDarkMode = isDark;
      this.themeStyles = this.computeStyles();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  private computeStyles() {
    return {
      linkColor: this.isDarkMode ? environment.NAV_DARK_TEXT_COLOR : environment.NAV_LIGHT_TEXT_COLOR,
      activeLinkColor: this.isDarkMode ? environment.NAV_ACTIVE_LINK_DARK : environment.NAV_ACTIVE_LINK_LIGHT,
      iconColor: this.isDarkMode ? environment.NAV_DARK_TEXT_COLOR : environment.NAV_LIGHT_TEXT_COLOR,
    };
  }

}
