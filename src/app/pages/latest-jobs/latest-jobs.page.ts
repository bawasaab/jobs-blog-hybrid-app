import { Component, OnInit } from '@angular/core';
import { ArticlesService } from "../../services/articles.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ToasterService } from 'src/app/custom/services/toaster.service';
import { LoaderService } from 'src/app/custom/services/loader.service';

@Component({
	selector: 'app-latest-jobs',
	templateUrl: './latest-jobs.page.html',
	styleUrls: ['./latest-jobs.page.scss'],
})
export class LatestJobsPage implements OnInit {

	title= 'Articles Listing';
	page= 'Latest Jobs';
	articles;
	isArticlesFound = false;
	loading;
    completed = false;

	constructor(
		protected articlesService: ArticlesService,
		protected activatedRoute: ActivatedRoute, 
		protected router: Router,
        protected toasterService: ToasterService,
        protected loaderService: LoaderService
	) {}

	ngOnInit() {
		this.getAllArticles();
	}

	async getAllArticles() {

		await this.loaderService.open();
		this.articlesService.getAllArticles().subscribe(
			async (result) => {
				this.articles = result?.data?.article;
				
				for (let index = 0; index < 11; index++) {
					this.articles.push(this.articles[0]);					
				}
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

	goToDescription(articleId) {
		console.log('articleId', articleId);
		this.router.navigate([`article-details/${articleId}`]);
	}
}
