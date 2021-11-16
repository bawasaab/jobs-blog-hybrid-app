import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { slideLeft } from 'src/app/custom/animations/slideLeft';
import { LoaderService } from 'src/app/custom/services/loader.service';
import { ToasterService } from 'src/app/custom/services/toaster.service';
import { ArticlesService } from "../../services/articles.service";

import { FcmService } from "../../services/fcm.service";
import { NetworkConnectedService } from "../../services/network-connected.service";

import { Subscription } from "rxjs";

@Component({
	selector: 'app-home',
	templateUrl: './home.page.html',
	styleUrls: ['./home.page.scss'],
    animations: [
        slideLeft
    ]
})
export class HomePage implements OnInit, OnDestroy {

	title = 'Home';
	articles;
	ex;
	selectedTab = 'search';
	isArticlesFound: boolean;
	completed: boolean;

	getAllLatestJobs$: Subscription;
	getAllJobsClosingSoon$: Subscription;
	getAllUpcomingJobs$: Subscription;

	homeLinks = [
		{
			name: 'Latest Jobs',
			link: 'latest-jobs'
		},
		{
			name: 'Jobs Closing Soon',
			link: 'jobs-closing-soon'
		},
		{
			name: 'Upcoming Jobs',
			link: 'upcoming-jobs'
		},
		{
			name: 'About us',
			link: 'about-us'
		},
		{
			name: 'Contact Us',
			link: 'contact-us'
		},
		{
			name: 'Disclaimer',
			link: 'disclaimer'
		},
		{
			name: 'Privacy Policy',
			link: 'privacy-policy'
		},
		{
			name: 'Govt Job Importance',
			link: 'importance-of-government-jobs-in-india'
		},
		{
			name: 'How to choose Govt Job',
			link: 'how-to-choose-the-right-government-job-for-you-in-india'
		},
		{
			name: 'FAQ',
			link: 'faqs'
		},
		{
			name: 'Settings',
			link: 'settings'
		},
	];

	categories = [
		'Police Jobs',
		'Defence Jobs',
		'Banking Jobs',
		'Clerical Jobs',
		'Teaching Jobs',
		'Non Teaching Jobs',
		'Engineering Jobs',
		'Steno Jobs',
	];

	qualifications = [
		'8th',
		'10th',
		'Aeronautical Engineering',
		'ANM',
		'Any Degree',
		'Architectural Engineering',
		'Automobile Engineering',
		'B.Ed',
		'B.Pharm',
		'B.Sc',
		'B.sc Nursing',
		'B.V.Sc',
		'BAMS',
		'BDS',
		'BHMS',
		'BUMS',
		'CA - ICWAI',
		'Chemical Engineering',
		'Civil Engineering',
		'Computer Science Engineering',
		'Diploma',
		'DMLT',
		'Electrical and Instrumentation',
		'Electrical Engineering',
		'Electronics and Communication Engineering',
		'GATE',
		'GNM',
		'Hotel Management',
		'Information Technology',
		'Intermediate (10+2)',
		'ITI',
		'LLB',
		'M.A',
		'M.E / M.Tech',
		'M.Pharm',
		'M.Phil',
		'Ph.D',
		'M.Sc',
		'M.sc Nursing',
		'M.V.Sc',
		'MBA',
		'MBA',
		'MBBS',
		'MCA',
		'Mechanical Engineering',
		'Medical',
		'Mining Engineering',
		'MS - MD',
		'Petroleum Engineering',
		'PGDM',
		'Pharmacy',
		'Post Graduation',
		'Sports Quota',
		'Staff Nurse',
	];

	states = [
		'Andaman-&-Nicobar',
		'Andhra-Pradesh',    
		'Arunachal-Pradesh',
		'Assam',
		'Bihar',
		'Chandigarh',
		'Chhattisgarh',
		'Dadra & Nagar Haveli',
		'Daman & Diu',
		'Delhi',
		'Goa',
		'Gujarat',
		'Haryana',
		'Himachal Pradesh',
		'Jammu & Kashmir',
		'Jharkhand',
		'Karnataka',
		'Kerala',
		'Lakshadweep',
		'Madhya Pradesh',
		'Maharashtra',
		'Manipur',
		'Meghalaya',
		'Mizoram',
		'Nagaland',
		'Odisha',
		'Puduchhery',
		'Punjab',
		'Rajasthan',
		'Sikkim',
		'Tamil Nadu',
		'Telangana',
		'Tripura',
		'Uttarakhand',
		'Uttar Pradesh',
		'West Bengal'  
	];
	isConnected: boolean = true;
	
	constructor(
		protected articlesService: ArticlesService,
		protected FcmService: FcmService,
		protected router: Router,
		protected activatedRoute: ActivatedRoute, 
        protected toasterService: ToasterService,
        protected loaderService: LoaderService,
		private networkConnectedService: NetworkConnectedService
	) { }

	ngOnInit() {
		this.getAllLatestJobs();

		this.networkConnectedService.isConnected$.subscribe( ( status: boolean ) => {
			this.isConnected = status;
		} );
	}

	searchArticle( str ) {

		// search-jobs
		this.router.navigate([`search-jobs/${this.selectedTab}/${str}`]);
	}

	orderBy( event ) {

		let orderByDate = event.target.value;
		console.log('orderByDate', orderByDate);
		if( orderByDate == 'publish' ) {
			this.getAllLatestJobs();

		} else if( orderByDate == 'closing' ) {
			this.getAllJobsClosingSoon();
			
		} else if( orderByDate == 'upcomming' ) {
			this.getAllUpcomingJobs();
			
		} else {
			this.getAllLatestJobs();
		}
	}

	swipeEvent( event ) {

		console.log('event', event);
	}

	async searchJobs( event ) {

		this.articles = [];
		let str = event.target.value;
		await this.loaderService.open();
		this.articlesService.searchArticle(str).subscribe(
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

	reg() {

		this.FcmService.resgisterPush();
	}

	segmentChanged(ev: any) {
		this.selectedTab = ev.detail.value;
	}

	goTo( link: string ) {
		this.router.navigate([`${link}`]);
	}

	async getAllLatestJobs() {

		this.articles = [];
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

	async getAllJobsClosingSoon() {

		this.articles = [];
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

	async getAllUpcomingJobs() {

		this.articles = [];
		await this.loaderService.open();
		this.getAllUpcomingJobs$ = this.articlesService.getAllUpcomingJobs().subscribe(
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

		if( this.getAllJobsClosingSoon$ ) {
            this.getAllJobsClosingSoon$.unsubscribe();
        }

		if( this.getAllUpcomingJobs$ ) {
            this.getAllUpcomingJobs$.unsubscribe();
        }
	}
}
