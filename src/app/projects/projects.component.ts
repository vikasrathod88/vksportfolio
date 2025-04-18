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
      techStack: '.Net MAUI, .Net Core, Rest API',
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
    },
    {
      title: 'Chat Application',
      description: 'A cross-platform real-time chat application built with .NET MAUI, featuring a modern WhatsApp-style UI, SignalR-based communication, and support for mobile and desktop responsiveness.',
      techStack: '.NET MAUI, SignalR, MVVM Toolkit, C#',
      duration: '2 Months',
      image: 'assets/img.jpg',
      link: '#'
    }
     
  ];
}
