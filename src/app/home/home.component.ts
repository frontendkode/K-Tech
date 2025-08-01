import { Component } from '@angular/core';
import { HeaderNavComponent } from '../header-nav/header-nav.component';
import { SharedModule } from '../modules/shared/shared.module';
import { LandingComponent } from '../landing/landing.component';
import { AboutComponent } from '../about/about.component';
import { AcademyComponent } from '../academy/academy.component';
import { LearningPathComponent } from '../learning-path/learning-path.component';
import { PopularCategoriesComponent } from '../popular-categories/popular-categories.component';
import { BootcampsComponent } from '../bootcamps/bootcamps.component';
import { TestimonalsComponent } from '../testimonals/testimonals.component';
import { UpcomingEventComponent } from '../upcoming-event/upcoming-event.component';
import { CampusContactComponent } from '../campus-contact/campus-contact.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [
    HeaderNavComponent,
    LandingComponent,
    AboutComponent,
    AcademyComponent,
    LearningPathComponent,
    PopularCategoriesComponent,
    BootcampsComponent,
    TestimonalsComponent,
    SharedModule,
    UpcomingEventComponent,
    CampusContactComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
