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
      title: 'PayRoll',
      description: 'A cross-platform payroll management system built with .NET Core and DevExpress, enabling seamless employee salary processing, tax calculation, and leave management with a responsive UI and secure data handling.',
      techStack: '.NET Core, MVC Toolkit, SQL, C#',
      duration: 'OnGoing',
      image: 'assets/img.jpg',
      link: '#'
    },

    {
      title: 'MyGM Admin App',
      description: 'A full-featured e-commerce platform with product management and payment integration.',
      techStack: '.NET Core, SQL Server, DevExpress, MVC',
      duration: '6 Months',
      image: 'assets/img.jpg',
      link: 'projects'
    },

    {
      title: 'AdSync',
      description: 'A web-based administrative tool built with .NET Core and DevExpress, designed for managing user records, assigning roles, and sending targeted emails to specific users using integrated SMTP services.',
      techStack: '.NET Core, DevExpress, MVC, SMTP Services',
      duration: '2 Months',
      image: 'assets/img.jpg',
      link: '#'
    },
       
    {
      title: 'O365Dashboard',
      description: 'A web-based dashboard built with .NET Core and DevExpress that integrates Microsoft 365 APIs to fetch user emails, calendar events, and documents, with seamless file storage and management on OneDrive.',
      techStack: '.NET Core, DevExpress, Microsoft Graph API, OneDrive, C#, Rest APIs, MVC',
      duration: '2 Months', 
      image: 'assets/img.jpg',
      link: '#'
    },
    {
      title: 'SmartAudit',
      description: 'A web-based auditing and client review system developed using .NET Core and DevExpress, enabling streamlined assessment workflows, client feedback tracking, and detailed report generation with rich UI components.',
      techStack: '.NET Core, DevExpress, MVC, C#',
      duration: '2 Months',
      image: 'assets/img.jpg',
      link: '#'
    },
 
       
    {
      title: 'Chat Application',
      description: 'A cross-platform real-time chat application built with .NET MAUI, featuring a modern WhatsApp-style UI, SignalR-based communication, and support for mobile and desktop responsiveness.',
      techStack: '.NET MAUI, SignalR, MVVM Toolkit, C#',
      duration: 'OnGoing',
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
