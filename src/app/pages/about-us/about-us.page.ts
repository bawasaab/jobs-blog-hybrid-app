import { Component, OnInit } from '@angular/core';
import { slideLeft } from 'src/app/custom/animations/slideLeft';

@Component({
    selector: 'app-about-us',
    templateUrl: './about-us.page.html',
    styleUrls: ['./about-us.page.scss'],
    animations: [
        slideLeft
    ]
})
export class AboutUsPage implements OnInit {

    title = 'About Us';

    constructor() { }

    ngOnInit() {
    }

}
