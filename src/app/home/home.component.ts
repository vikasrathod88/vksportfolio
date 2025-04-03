import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { AboutComponent } from "../about/about.component";
import { ContactUsComponent } from "../contact-us/contact-us.component";
import { NgxTypedJsModule } from 'ngx-typed-js';
import { log } from 'node:console';


@Component({
  selector: 'app-home',
  imports: [NgxTypedJsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
ngOnInit(): void {
  console.log("ng On Init called...")
}
}
