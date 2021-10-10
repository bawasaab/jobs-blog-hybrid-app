import { Component, OnInit } from '@angular/core';
import { slideLeft } from 'src/app/custom/animations/slideLeft';
import { ArticlesService } from "../../services/articles.service";

@Component({
	selector: 'app-home',
	templateUrl: './home.page.html',
	styleUrls: ['./home.page.scss'],
    animations: [
        slideLeft
    ]
})
export class HomePage implements OnInit {

	title = 'Home';
	articles;
	ex;

	constructor(
		protected articlesService: ArticlesService
	) { }

	ngOnInit() {
		this.getAllArticles();
	}

	getAllArticles() {

		this.articlesService.getAllArticles().subscribe(
			async (result) => {
				// console.log('result', result);
				if( result.success ) {
					this.articles = result?.data?.article;
					console.log('this.articles', this.articles);
				} else {
					alert(result.msg.toString());
				}
			},
			async (ex) => {
				console.log('ex', ex);
				this.ex = ex;
				alert(ex.toString());
			}
		);
	}
}
