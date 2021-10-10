import { Component, OnInit } from '@angular/core';
import { slideLeft } from 'src/app/custom/animations/slideLeft';

@Component({
    selector: 'app-faqs',
    templateUrl: './faqs.page.html',
    styleUrls: ['./faqs.page.scss'],
    animations: [
        slideLeft
    ]
})
export class FaqsPage implements OnInit {

    title = 'Frequently asked Questions(FAQ\'s)';

    constructor() { }

    ngOnInit() {
    }

}
