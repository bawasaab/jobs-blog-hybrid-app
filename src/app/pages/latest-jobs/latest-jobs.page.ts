import { Component, OnInit } from '@angular/core';
import { ArticlesService } from "../../services/articles.service";
import { ActivatedRoute, Router } from "@angular/router";
import { LoadingController } from '@ionic/angular';

@Component({
	selector: 'app-latest-jobs',
	templateUrl: './latest-jobs.page.html',
	styleUrls: ['./latest-jobs.page.scss'],
})
export class LatestJobsPage implements OnInit {

	title= 'Articles';
	page= 'Latest Jobs';
	articles;
	ex;
	isArticlesFound = false;
	loading;

	constructor(
		protected articlesService: ArticlesService,
		protected activatedRoute: ActivatedRoute, 
		protected router: Router,
		public loadingController: LoadingController
	) {
	}

	ngOnInit() {
		this.presentLoading();
		// this.getAllArticles();
	}

	async presentLoading() {
		this.loading = await this.loadingController.create({
		  cssClass: 'my-custom-class',
		  message: 'Please wait...',
		//   duration: 2000
		});
		// await loading.present();
	
		// const { role, data } = await this.loading.onDidDismiss();
		// console.log('Loading dismissed!');
		this.getAllArticles();
	}

	async getAllArticles() {

		await this.loading.present();
		this.articlesService.getAllArticles().subscribe(
			async (result) => {
				console.log('result', result);
				this.articles = result?.data?.article;
				
				for (let index = 0; index < 11; index++) {
					this.articles.push(this.articles[0]);					
				}
				this.isArticlesFound = true;
			},
			async (ex) => {
				await this.loading.dismiss();
				console.log('ex', ex);
				this.ex = ex;
				alert(ex.toString());
			},
			async () => {
				if( this.isArticlesFound ) {
					await this.loading.dismiss();
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
