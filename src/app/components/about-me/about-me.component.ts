import { Component } from '@angular/core';
import { environment } from '../../env/enviroment';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';
import { DataService } from '../../services/data.service';
import { Data } from '../../model/data';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {

  isDark = false;
  data!: Data;

  constructor(private themeService: ThemeService, private dataService: DataService) {}

  ngOnInit(): void {
    this.themeService.isDarkMode$.subscribe(mode => this.isDark = mode);
    this.dataService.getData().subscribe(data => {
      this.data = data;
    });
  }

  
}
