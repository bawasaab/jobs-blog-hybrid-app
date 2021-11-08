import { Component, OnInit } from '@angular/core';
import { slideLeft } from 'src/app/custom/animations/slideLeft';
import { ArticlesService } from "../../services/articles.service";

import { FcmService } from "../../services/fcm.service";

@Component({
	selector: 'app-home',
	templateUrl: './home.page.html',
	styleUrls: ['./home.page.scss'],
    animations: [
        slideLeft
    ]
})
export class HomePage implements OnInit {

	title = 'Home';
	articles;
	ex;
	selectedTab = 'categories';

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

	constructor(
		protected articlesService: ArticlesService,
		protected FcmService: FcmService
	) { }

	ngOnInit() {
		// this.getAllArticles();
		// this.reg();
	}

	getAllArticles() {

		this.articlesService.getAllArticles().subscribe(
			async (result) => {
				// console.log('result', result);
				if( result.success ) {
					this.articles = result?.data?.article;
					console.log('this.articles', this.articles);
				} else {
					alert(result.msg.toString());
				}
			},
			async (ex) => {
				console.log('ex', ex);
				this.ex = ex;
				alert(ex.toString());
			}
		);
	}

	reg() {

		this.FcmService.resgisterPush();
	}

	segmentChanged(ev: any) {
		this.selectedTab = ev.detail.value;
	}
}
