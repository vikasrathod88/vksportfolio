import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [NgFor],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills = [
    {
      category: 'Frontend Development',
      items: ['Angular', 'TypeScript', 'HTML', 'CSS', 'DevExpress']
    },
    {
      category: 'Backend Development',
      items: ['.NET Core', 'REST API', 'SQL Server']
    },
   
    {
      category: 'Cloud & DevOps',
      items: ['Azure DevOps', 'Basic Azure', 'Microsoft Graph APIs']
    },
    {
      category: 'Cross-Platform Development',
      items: ['.NET MAUI']
    },
    {
      category: 'Version Control',
      items: ['Git', 'GitHub']
    }
  ];
  
}
