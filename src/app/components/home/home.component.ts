import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  isDark = false;
  
  constructor(private themeService: ThemeService) {}

    ngOnInit() {
    this.themeService.isDarkMode$.subscribe(mode => this.isDark = mode);
    }

}
