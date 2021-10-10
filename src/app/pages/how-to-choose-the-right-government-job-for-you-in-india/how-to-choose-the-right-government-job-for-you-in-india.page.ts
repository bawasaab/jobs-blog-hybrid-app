import { Component, OnInit } from '@angular/core';
import { slideLeft } from 'src/app/custom/animations/slideLeft';

@Component({
    selector: 'app-how-to-choose-the-right-government-job-for-you-in-india',
    templateUrl: './how-to-choose-the-right-government-job-for-you-in-india.page.html',
    styleUrls: ['./how-to-choose-the-right-government-job-for-you-in-india.page.scss'],
    animations: [
        slideLeft
    ]
})
export class HowToChooseTheRightGovernmentJobForYouInIndiaPage implements OnInit {

    title = 'HOW TO CHOOSE THE RIGHT GOVERNMENT JOB FOR YOU IN INDIA';

    constructor() { }

    ngOnInit() {
    }

}
