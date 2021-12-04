import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticlesService } from "../../services/articles.service";
import { ToasterService } from 'src/app/custom/services/toaster.service';
import { LoaderService } from 'src/app/custom/services/loader.service';
import { slideLeft } from 'src/app/custom/animations/slideLeft';
import { NgForm } from '@angular/forms';
import { SubscribeNewsletterService } from 'src/app/services/subscribe-newsletter.service';
import { Subscription } from "rxjs";
import { ArticleDetailsService } from 'src/app/services/article-details.service';

@Component({
	selector: 'app-article-details',
	templateUrl: './article-details.page.html',
	styleUrls: ['./article-details.page.scss'],
    animations: [
        slideLeft
    ]
})
export class ArticleDetailsPage implements OnInit, OnDestroy {

	articles;
	isArticlesFound = false;
	articleId;
	isArticleIdSetFlag = false;
	loading;
    completed;
    isSubmitted = false;

	SubscribeNewsletter$: Subscription;
	subscribeArticleDetailsService$: Subscription;

	constructor(
		protected articlesService: ArticlesService,
		protected activatedRoute: ActivatedRoute, 
		protected router: Router,
		protected toasterService: ToasterService,
        protected loaderService: LoaderService,
        protected subscribeNewsletterService: SubscribeNewsletterService,
		protected articleDetailsService: ArticleDetailsService
	) { }

	ngOnInit() {

		this.subscribeArticleDetailsService$ = this.articleDetailsService.articleDetails$.subscribe( (articleDetails: any) => {
			this.articles = articleDetails;
			this.isArticlesFound = true;
		} );
	}

    openExternal(url: string) {
        window.open(url, "_blank");
    }

    async SubscribeNewsletter( frmObj: NgForm ) {
        
        this.isSubmitted = true;
        if( frmObj.invalid ) {
            console.log('in_data.errors', frmObj.errors);
            return;
        }
        let in_data = frmObj.value;
        console.log('in_data', in_data);

        await this.loaderService.open();
        this.subscribeNewsletterService.newsLetterSubscribe( in_data ).subscribe(
            async (result) => {
                console.log('result.msg', result.msg);
                this.toasterService.presentToast(result.msg);
                this.isSubmitted = false;
                frmObj.reset();
            },
            async (ex) => {
                console.log('ex', ex);
                this.toasterService.presentToast(ex.message);
				await this.loaderService.close();
            },
            async () => {
                await this.loaderService.close();
            },
        );
    }

	ngOnDestroy() {

		if( this.SubscribeNewsletter$ ) {
            this.SubscribeNewsletter$.unsubscribe();
        }

		if( this.subscribeArticleDetailsService$ ) {
			this.subscribeArticleDetailsService$.unsubscribe();
		}
	}
}
