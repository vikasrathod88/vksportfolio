import { Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServicesComponent } from './services/services.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'content', component: ContentComponent},
    {path: 'skills', component: SkillsComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contactUs', component: ContactUsComponent},
    {path: 'footer', component: FooterComponent},
    {path: 'services', component: ServicesComponent},
    {path: '**', component: PageNotFoundComponent}
];
