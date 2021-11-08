import { Component, OnInit } from '@angular/core';
import { ArticlesService } from "../../services/articles.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ToasterService } from 'src/app/custom/services/toaster.service';
import { LoaderService } from 'src/app/custom/services/loader.service';
import { slideLeft } from 'src/app/custom/animations/slideLeft';

@Component({
  selector: 'app-search-jobs',
  templateUrl: './search-jobs.page.html',
  styleUrls: ['./search-jobs.page.scss'],
  animations: [
	slideLeft
  ]
})
export class SearchJobsPage implements OnInit {

	title= 'Articles Listing By ';
	page= 'Search Results: ';
	searchResults = '';
	articles;
	isArticlesFound = false;
	loading;
    completed = false;
	str = '';
	isArticlestrSetFlag = false;
	isArticleIdSetFlag = false;

	constructor(
		protected articlesService: ArticlesService,
		protected activatedRoute: ActivatedRoute, 
		protected router: Router,
        protected toasterService: ToasterService,
        protected loaderService: LoaderService
	) {}


  ngOnInit() {

	this.activatedRoute.params.subscribe((params) => {
		this.title += params.title.charAt(0).toUpperCase() + params.title.slice(1);
		this.str = params.str;
		this.searchResults = this.page + this.str;

		this.isArticlestrSetFlag = this.str ? true : false;
		this.isArticlestrSetFlag ? this.searchArticle() : '';
	});
  }

  async searchArticle() {

	await this.loaderService.open();
	this.articlesService.searchArticle(this.str).subscribe(
		async (result) => {
			this.articles = result?.data?.article;
			this.isArticlesFound = true;
		},
		async (ex) => {
			console.log('ex', ex);
			this.toasterService.presentToast(ex.message);
		},
		async () => {
			this.completed = true;
			if( this.isArticlesFound ) {
				await this.loaderService.close();
			}
		}
	);
}

identify( index, item ) {
	return item._id;
}

goToDescription(slug) {
	console.log('articleId', slug);
	this.router.navigate([`article-details/${slug}`]);
}

}
