import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { slideLeft } from 'src/app/custom/animations/slideLeft';
import { LoaderService } from 'src/app/custom/services/loader.service';
import { ToasterService } from 'src/app/custom/services/toaster.service';
import { ArticlesService } from 'src/app/services/articles.service';
import { Subscription } from "rxjs";

@Component({
	selector: 'app-jobs-closing-soon',
	templateUrl: './jobs-closing-soon.page.html',
	styleUrls: ['./jobs-closing-soon.page.scss'],
    animations: [
        slideLeft
    ]
})
export class JobsClosingSoonPage implements OnInit, OnDestroy {

	title= 'Articles Listing';
	page= 'Jobs Closing Soon';
	articles;
	isArticlesFound = false;
	loading;
    completed = false;

	getAllJobsClosingSoon$: Subscription;

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
		this.getAllJobsClosingSoon$ = this.articlesService.getAllJobsClosingSoon().subscribe(
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
		
		if( this.getAllJobsClosingSoon$ ) {
            this.getAllJobsClosingSoon$.unsubscribe();
        }
	}
}
