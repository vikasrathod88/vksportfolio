import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [NgFor],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Admin App',
      description: 'A full-featured e-commerce platform with product management and payment integration.',
      techStack: '.NET Core, SQL Server',
      duration: '6 Months',
      image: 'assets/img.jpg',
      link: 'projects'
    },
    {
      title: 'Employee Manager',
      description: 'A task management system with drag-and-drop functionality and user authentication.',
      techStack: 'Angular, .Net Core, Rest API',
      duration: '3 Months',
      image: 'assets/img.jpg',
      link: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio showcasing my skills, projects, and experience.',
      techStack: 'Angular, Bootstrap, TypeScript',
      duration: '8 Days',
      image: 'assets/img.jpg',
      link: '#'
    }
  ];
}
