import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {

  cards = [
    { 
    title: 'Card title 1', 
    text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    imgSrc: '../../assets/images/1.webp' 
  },

    { 
      title: 'Card title 2', 
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', 
      imgSrc: '../../assets/images/1.webp'
    },
    
    { 
      title: 'Card title 3', 
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', 
      imgSrc: '../../assets/images/1.webp'
    },

    { 
      title: 'Card title 4', 
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', 
      imgSrc: '../../assets/images/1.webp'
    },
    
    { 
      title: 'Card title 5', 
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', 
      imgSrc: '../../assets/images/1.webp'
    }, 
    
    { 
      title: 'Card title 6', 
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', 
      imgSrc: '../../assets/images/1.webp'
    },
    
    { 
      title: 'Card title 7', 
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', 
      imgSrc: '../../assets/images/1.webp'
    },
    { 
      title: 'Card title 8', 
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', 
      imgSrc: '../../assets/images/1.webp'
    },
    
    { 
      title: 'Card title 9', 
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', 
      imgSrc: '../../assets/images/1.webp'
    },

  
  ];

  constructor(private router: Router) {}

  viewCardDetail(title: string): void {
    const encodedTitle = encodeURIComponent(title.replace(/\s/g, '-'));
    this.router.navigate(['/blog', encodedTitle]);
  }

}
