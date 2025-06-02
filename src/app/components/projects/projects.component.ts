import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {


  isDark = false;

  constructor(private themeService: ThemeService) { }

  ngOnInit() {
    this.themeService.isDarkMode$.subscribe(mode => this.isDark = mode);
  }

  projects = [
    {
      image: 'assets/img/project1.png',
      title: 'Project name/description',
      description: 'Technology used'
    },
    {
      image: 'assets/img/project2.png',
      title: 'Project name/description',
      description: 'Web Design / Usability Testing'
    },
    {
      image: 'assets/img/project3.png',
      title: 'Project name/description',
      description: 'Web Design / Usability Testing'
    },
    {
      image: 'assets/img/project4.png',
      title: 'Educational Platform',
      description: 'Web Design / Usability Testing'
    },
    {
      image: 'assets/img/project5.png',
      title: 'Educational Platform',
      description: 'Web Design / Usability Testing'
    },
    {
      image: 'assets/img/project6.png',
      title: 'Educational Platform',
      description: 'Web Design / Usability Testing'
    }
  ];
}
