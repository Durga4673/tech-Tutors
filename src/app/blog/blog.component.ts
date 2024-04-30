import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {

  blogPosts = [
    {
      title: 'Good ways to set mind while Studying',
      imageUrl: 'assets/images/item5.jpg',
      date: 'Dec 1, 2024',
      content: 'At the core of our practice is the idea that cities are the incubators of our greatest achievements, and the best hope for a sustainable future.'
    },

    {
      title: 'Education Is For Human Greatness And Achievments',
      imageUrl: 'assets/images/blog2.jpg',
      date: 'Dec 3, 2024',
      content: 'At the core of our practice is the idea that cities are the incubators of our greatest achievements, and the best hope for a sustainable future.'
    },
    
    {
      title: 'Education Is For Human Greatness And Achievments',
      imageUrl: 'assets/images/blog3.jpg',
      date: 'Dec 9, 2024',
      content: 'At the core of our practice is the idea that cities are the incubators of our greatest achievements, and the best hope for a sustainable future.'
    },
    {
      title: 'Good ways to set mind while Studying',
      imageUrl: 'assets/images/blog4.jpg',
      date: 'Dec 1, 2024',
      content: 'At the core of our practice is the idea that cities are the incubators of our greatest achievements, and the best hope for a sustainable future.'
    },
    
    {
      title: 'Education Is For Human Greatness And Achievments',
      imageUrl: 'assets/images/blog5.jpg',
      date: 'Dec 1, 2024',
      content: 'At the core of our practice is the idea that cities are the incubators of our greatest achievements, and the best hope for a sustainable future.'
    },
    
    {
      title: 'The State Of Learn And Develop Tips In 2020',
      imageUrl: 'assets/images/blog6.jpg',
      date: 'Dec 1, 2024',
      content: 'At the core of our practice is the idea that cities are the incubators of our greatest achievements, and the best hope for a sustainable future.'
    },

  ];

  constructor(private router: Router) {}

  viewCardDetail(title: string): void {
    const encodedTitle = encodeURIComponent(title.replace(/\s/g, '-'));
    this.router.navigate(['/blog', encodedTitle]);
  }

}
