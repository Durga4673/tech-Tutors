import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  
  constructor(private router: Router) {}

  cards = [
    { 
      title: 'Computer Science',
      imgSrc: '../../assets/images/1.webp',
      dates: 'Mar 9 2017',
      duration: 18,
      sitAvailable: 25,
      description: 'Lorem Ipsum is simply dummy text of the printin and typesetting industry. Lorem Ipsum has been the industry’s standard…'
    },
  ];

  goToCourseDetail(title: string): void {
    this.router.navigate(['/courses', title.replace(/\s/g, '-')]);
  }

}
