import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { FcmService } from './services/fcm.service';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit  {

	public appPages = [
		{
			title: 'Home',
			url: '/home',
			icon: 'home'
		},
		{
			title: 'Latest Jobs',
			url: '/latest-jobs',
			icon: 'newspaper'
		},
		{
			title: 'Jobs Closing Soon',
			url: '/jobs-closing-soon',
			icon: 'timer'
		},
		{
			title: 'Upcoming Jobs',
			url: '/upcoming-jobs',
			icon: 'calendar'
		},
		{
			title: 'About Us',
			url: '/about-us',
			icon: 'information-circle'
		},
		{
			title: 'Contact Us',
			url: '/contact-us',
			icon: 'mail'
		},
		{
			title: 'Disclaimer',
			url: '/disclaimer',
			icon: 'hand-right'
		},
		{
			title: 'Privacy Policy',
			url: '/privacy-policy',
			icon: 'document-text'
		},
		{
			title: 'importance-of-government-jobs-in-india',
			url: '/importance-of-government-jobs-in-india',
			icon: 'information-circle'
		},
		{
			title: 'How To Choose The Right Government Job For You In India',
			url: '/how-to-choose-the-right-government-job-for-you-in-india',
			icon: 'information-circle'
		},
		{
			title: 'Frequently Asked Questions',
			url: '/faqs',
			icon: 'chatbubbles'
		},
		{
			title: 'Settings',
			url: '/settings',
			icon: 'settings'
		},
	];

	constructor(
		private fcmService: FcmService,
		private platform: Platform
	) { }

	ngOnInit() {

		this.platform.ready()
		.then( () => {
			
		} )
		.catch( (ex) => {
			console.log('app component platform ready error', ex);
		} );
	}
}
