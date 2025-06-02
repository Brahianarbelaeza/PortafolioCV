import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Data } from '../../model/data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  isDark = false;
  data!: Data;

  constructor(private themeService: ThemeService, private dataService: DataService) {
    
  }

  ngOnInit() {
    this.themeService.isDarkMode$.subscribe(mode => this.isDark = mode);
    this.dataService.getData().subscribe(data => {
      this.data = data;
    }
    );
  }

}
