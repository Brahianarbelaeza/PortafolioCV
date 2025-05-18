import { Component } from '@angular/core';
import { environment } from '../../env/enviroment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {

  isDarkMode = environment.COLOR_MODE === 'dark';
  themeStyles = this.computeStyles();

  ngOnInit(): void {
    const saved = localStorage.getItem('darkMode');
    this.isDarkMode = saved === null ? this.isDarkMode : saved === 'true';
    document.body.classList.toggle('light-mode', !this.isDarkMode);
    this.themeStyles = this.computeStyles();
  }

  private computeStyles() {
    return {
      bgColor: this.isDarkMode ? environment.BG_DARK_COLOR : environment.BG_LIGHT_COLOR,
      textColor: this.isDarkMode ? environment.NAV_DARK_TEXT_COLOR : environment.NAV_LIGHT_TEXT_COLOR
    };
  }
  
}
