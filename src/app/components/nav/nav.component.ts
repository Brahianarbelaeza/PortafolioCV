import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../env/enviroment';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {
  isDarkMode: boolean = environment.COLOR_MODE === 'dark';

  themeStyles = this.computeStyles();

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    environment.COLOR_MODE = this.isDarkMode ? 'dark' : 'light';
    localStorage.setItem('darkMode', this.isDarkMode.toString());
    document.body.classList.toggle('light-mode', !this.isDarkMode);
    this.themeStyles = this.computeStyles(); // Actualiza estilos
  }

  ngOnInit(): void {
    const savedMode = localStorage.getItem('darkMode');
    this.isDarkMode = savedMode === null ? true : savedMode === 'true';
    document.body.classList.toggle('light-mode', !this.isDarkMode);
    this.themeStyles = this.computeStyles();
  }

  private computeStyles() {
    return {
      navBackground: this.isDarkMode ? environment.BG_DARK_COLOR : environment.BG_LIGHT_COLOR,
      linkColor: this.isDarkMode ? environment.NAV_DARK_TEXT_COLOR : environment.NAV_LIGHT_TEXT_COLOR,
      activeLinkColor: this.isDarkMode ? environment.NAV_ACTIVE_LINK_DARK : environment.NAV_ACTIVE_LINK_LIGHT,
      contactButton: {
        borderColor: this.isDarkMode ? environment.NAV_CONTACT_BORDER_DARK : environment.NAV_CONTACT_BORDER_LIGHT,
        color: this.isDarkMode ? environment.NAV_CONTACT_BORDER_DARK : environment.NAV_CONTACT_BORDER_LIGHT,
        fontFamily: environment.NAV_FONT_FAMILY,
        fontSize: environment.NAV_FONT_SIZE
      },
      iconColor: this.isDarkMode ? environment.NAV_DARK_TEXT_COLOR : environment.NAV_LIGHT_TEXT_COLOR,
    };
  }
}
