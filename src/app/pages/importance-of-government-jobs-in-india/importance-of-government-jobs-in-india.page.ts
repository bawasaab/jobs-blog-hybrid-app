import { Component, OnInit } from '@angular/core';
import { slideLeft } from 'src/app/custom/animations/slideLeft';

@Component({
    selector: 'app-importance-of-government-jobs-in-india',
    templateUrl: './importance-of-government-jobs-in-india.page.html',
    styleUrls: ['./importance-of-government-jobs-in-india.page.scss'],
    animations: [
        slideLeft
    ]
})
export class ImportanceOfGovernmentJobsInIndiaPage implements OnInit {

    title = "Govt Jobs Importance";

    constructor() { }

    ngOnInit() {
    }

}
