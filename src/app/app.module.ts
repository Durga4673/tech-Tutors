import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material/material.module';
import { SharedModule } from './shared/shared.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { BlogComponent } from './blog/blog.component';
import { CoursesComponent } from './courses/courses.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    RegisterComponentComponent,
    BlogComponent,
    CoursesComponent,
    AboutUsComponent,
    BlogCardComponent,
    CourseDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
