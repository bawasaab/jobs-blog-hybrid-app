import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { slideLeft } from 'src/app/custom/animations/slideLeft';

@Component({
  selector: 'article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss'],
  animations: [
    slideLeft
  ]
})
export class ArticleCardComponent implements OnInit {

  @Input('articles') articles  = [];

  constructor(
    protected router: Router
  ) { }

  ngOnInit() {}

  identify( index, item ) {
		return item._id;
	}

  goToDescription(slug) {
		console.log('articleId', slug);
		this.router.navigate([`article-details/${slug}`]);
	}	
}
