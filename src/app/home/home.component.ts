import { Component } from '@angular/core';
import { AboutComponent } from "../about/about.component";
import { ContactUsComponent } from "../contact-us/contact-us.component";
import { NgxTypedJsModule } from 'ngx-typed-js';

@Component({
  selector: 'app-home',
  imports: [NgxTypedJsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
