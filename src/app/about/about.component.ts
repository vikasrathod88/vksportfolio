import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [NgFor],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  about = {
    name: 'Vikas Rathod',
    role: 'Full-Stack Developer (Angular & .NET)',
    description: `I am a dedicated full-stack developer specializing in Angular and .NET. 
                  With a passion for building scalable applications, I excel in frontend and backend development, 
                  API integration, and DevOps automation.`,
    skills: [
      { name: 'Angular', icon: 'fa-brands fa-angular text-danger' },
      { name: '.NET Core', icon: 'fa-brands fa-microsoft text-success' },
      { name: 'REST API', icon: 'fa-solid fa-plug-circle-bolt text-dark' },
      { name: 'SQL Server', icon: 'fa-solid fa-database text-danger' },
      { name: 'Azure DevOps', icon: 'fa-brands fa-microsoft text-primary' },
      { name: 'DevExpress', icon: 'fa-brands fa-microsoft text-primary' },
      { name: 'Git', icon: 'fa-brands fa-git-alt text-danger' },
      { name: 'GitHub', icon: 'fa-brands fa-github text-dark' }
    
    ],
    image: 'assets/profile.jpg',
    resumeLink: 'assets/Vikas_Rathod_CV.pdf'
  };
}
