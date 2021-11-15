import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss'],
})
export class ArticleCardComponent implements OnInit {

  @Input('articles') articles  = [];

  constructor() { }

  ngOnInit() {}

  identify( index, item ) {
		return item._id;
	}

}
