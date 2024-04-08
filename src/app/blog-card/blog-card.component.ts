import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent implements OnInit{

  cardTitle: string = ''; 


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.cardTitle = this.route.snapshot.paramMap.get('title') || ''; // Get the title parameter from the URL
  }
}
