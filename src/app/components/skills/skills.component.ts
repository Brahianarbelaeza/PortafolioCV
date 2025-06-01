import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  services = [
    {
      icon: '📊',
      title: 'Data Analytics & Visualization',
      description: 'From data inception to actionable insights, I design compelling analytics and visualization solutions that illuminate trends, empower decision-making, and drive your business forward.'
    },
    {
      icon: '📈',
      title: 'Predictive Analytics and Forecasting',
      description: 'From data to foresight, I craft predictive analytics and forecasting solutions that steer your business with precision, empowering strategic decisions and ensuring future success.'
    },
    {
      icon: '🧠',
      title: 'Natural Language Processing',
      description: 'From text to insight, I craft NLP solutions that decode language intricacies, revolutionize data comprehension and empower your business in the digital age.'
    },
    {
      icon: '🤖',
      title: 'AI Chatbots',
      description: 'From design to deployment, I build AI Chatbots that enhance customer interactions, streamline processes, and elevate your brand\'s engagement.',
      image: 'assets/ai-chip.png'
    },
    {
      icon: '⚙️',
      title: 'Machine Learning',
      description: 'From concept to automation, I craft ML solutions that decode patterns and optimize performance, bringing your business into the intelligent automation era.'
    }
  ];
}
