import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { slideLeft } from 'src/app/custom/animations/slideLeft';
import { ArticleDetailsService } from 'src/app/services/article-details.service';

@Component({
  selector: 'article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss'],
  animations: [
    slideLeft
  ]
})
export class ArticleCardComponent implements OnInit {

  @Input('articles') articles = [];

  constructor(
    protected router: Router,
    protected articleDetailsService: ArticleDetailsService
  ) { }

  ngOnInit() {}

  identify( index, item ) {
		return item._id;
	}

  goToDescription(slug, article) {
		console.log('articleId', slug);

    this.articleDetailsService.setArticle(article);
		this.router.navigate([`article-details/${slug}`]);
	}	
}
