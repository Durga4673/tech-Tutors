import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  
  isFirst = true;
  constructor(private router: Router) {}

  cards = [
    { 
      title: 'AWS',
      imgSrc: 'assets/images/aws-dh.png',
      dates: 'Mar 9 2017',
      duration: 18,
      sitAvailable: 25,
      description: 'Lorem Ipsum is simply dummy text of the printin and typesetting industry. Lorem Ipsum has been the industry’s standard…'
    },
    
    { 
      title: 'Data Science with Python',
      imgSrc: 'assets/images/python-datascience-dh.jpg',
      dates: 'Mar 9 2017',
      duration: 18,
      sitAvailable: 25,
      description: 'Lorem Ipsum is simply dummy text of the printin and typesetting industry. Lorem Ipsum has been the industry’s standard…'
    },
    { 
      title: 'Devops',
      imgSrc: 'assets/images/devops-dh.jpg',
      dates: 'Mar 9 2017',
      duration: 18,
      sitAvailable: 25,
      description: 'Lorem Ipsum is simply dummy text of the printin and typesetting industry. Lorem Ipsum has been the industry’s standard…'
    },
    { 
      title: 'Python',
      imgSrc: 'assets/images/python-dh.jpg',
      dates: 'Mar 9 2017',
      duration: 18,
      sitAvailable: 25,
      description: 'Lorem Ipsum is simply dummy text of the printin and typesetting industry. Lorem Ipsum has been the industry’s standard…'
    },
    
    { 
      title: 'RPA',
      imgSrc: 'assets/images/RPA-dh.jpg',
      dates: 'Mar 9 2017',
      duration: 18,
      sitAvailable: 25,
      description: 'Lorem Ipsum is simply dummy text of the printin and typesetting industry. Lorem Ipsum has been the industry’s standard…'
    },
    { 
      title: 'Salesforce',
      imgSrc: 'assets/images/saleforce-dh.jpg',
      dates: 'Mar 9 2017',
      duration: 18,
      sitAvailable: 25,
      description: 'Lorem Ipsum is simply dummy text of the printin and typesetting industry. Lorem Ipsum has been the industry’s standard…'
    },
    { 
      title: 'Selenium',
      imgSrc: 'assets/images/selenium-dh.png',
      dates: 'Mar 9 2017',
      duration: 18,
      sitAvailable: 25,
      description: 'Lorem Ipsum is simply dummy text of the printin and typesetting industry. Lorem Ipsum has been the industry’s standard…'
    },
   
    { 
      title: 'Data Science',
      imgSrc: 'assets/images/data-science-dh.jpg',
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
