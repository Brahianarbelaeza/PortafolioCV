import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

}
