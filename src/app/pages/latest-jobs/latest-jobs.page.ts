import { Component, OnInit, OnDestroy } from '@angular/core';
import { ArticlesService } from "../../services/articles.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ToasterService } from 'src/app/custom/services/toaster.service';
import { LoaderService } from 'src/app/custom/services/loader.service';
import { slideLeft } from 'src/app/custom/animations/slideLeft';

import { Subscription } from "rxjs";

@Component({
	selector: 'app-latest-jobs',
	templateUrl: './latest-jobs.page.html',
	styleUrls: ['./latest-jobs.page.scss'],
    animations: [
        slideLeft
    ]
})
export class LatestJobsPage implements OnInit, OnDestroy {

	title= 'Articles Listing';
	page= 'Latest Jobs';
	articles;
	isArticlesFound = false;
	loading;
    completed = false;

	getAllLatestJobs$: Subscription;

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
		this.getAllLatestJobs$ = this.articlesService.getAllLatestJobs().subscribe(
			async (result) => {
				this.articles = result?.data?.article;
				this.isArticlesFound = true;
			},
			async (ex) => {
				console.log('ex', ex);
                this.toasterService.presentToast(ex.message);
				await this.loaderService.close();
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

	ngOnDestroy() {
	
		if( this.getAllLatestJobs$ ) {
            this.getAllLatestJobs$.unsubscribe();
        }
	}
}
