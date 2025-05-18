import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {

  themeStyles = this.computeStyles();


  private computeStyles() {
    return {
      backgroundColor: '#E0E8F6',
      textColor: '#333',
      fontFamily: 'Montserrat, sans-serif',
      fontSize: '18px'
    };
  }

  
}
