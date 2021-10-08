import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ArticlesService } from "../../services/articles.service";

@Component({
	selector: 'app-article-details',
	templateUrl: './article-details.page.html',
	styleUrls: ['./article-details.page.scss'],
})
export class ArticleDetailsPage implements OnInit {

	articles;
	isArticlesFound = false;
	articleId;
	isArticleIdSetFlag = false;
	loading;

	constructor(
		protected articlesService: ArticlesService,
		protected activatedRoute: ActivatedRoute, 
		protected router: Router,
		public loadingController: LoadingController
	) { }

	ngOnInit() {

		this.activatedRoute.params.subscribe((params) => {
			this.articleId = params.articleId;
			console.log('this.articleId', this.articleId);

			this.isArticleIdSetFlag = this.articleId ? true : false;
			this.isArticleIdSetFlag ? this.presentLoading() : '';
		});
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
		this.getArticleById();
	}

	async getArticleById() {
		await this.loading.present();
		this.articlesService.getArticleById(this.articleId).subscribe(
			async (result) => {
				console.log('result', result);
				this.articles = result?.data?.article;
				this.isArticlesFound = true;
			},
			async (ex) => {
				await this.loading.dismiss();
				console.log('ex', ex);
				alert(ex.toString());
			},
			async () => {
				if( this.isArticlesFound ) {
					await this.loading.dismiss();
				}
			}
		);
	}
}
