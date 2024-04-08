import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { BlogComponent } from './blog/blog.component';
import { CoursesComponent } from './courses/courses.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'courses', component: CoursesComponent},
  {path: 'aboutus', component: AboutUsComponent},
  {path: 'registerUS', component: RegisterComponentComponent},
  {path: 'blog', component: BlogComponent},
  { path: 'blog/:title', component: BlogCardComponent },
  { path: 'courses/:title', component: CourseDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
