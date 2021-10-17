import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { slideLeft } from 'src/app/custom/animations/slideLeft';
import { LoaderService } from 'src/app/custom/services/loader.service';
import { ToasterService } from 'src/app/custom/services/toaster.service';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
	selector: 'app-jobs-closing-soon',
	templateUrl: './jobs-closing-soon.page.html',
	styleUrls: ['./jobs-closing-soon.page.scss'],
    animations: [
        slideLeft
    ]
})
export class JobsClosingSoonPage implements OnInit {

	title= 'Articles Listing';
	page= 'Jobs Closing Soon';
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
		this.articlesService.getAllJobsClosingSoon().subscribe(
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

	goToDescription(slug) {
		this.router.navigate([`article-details/${slug}`]);
	}
}
