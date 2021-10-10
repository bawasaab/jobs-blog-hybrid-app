import { Component, OnInit } from '@angular/core';
import { slideLeft } from 'src/app/custom/animations/slideLeft';

@Component({
    selector: 'app-privacy-policy',
    templateUrl: './privacy-policy.page.html',
    styleUrls: ['./privacy-policy.page.scss'],
    animations: [
        slideLeft
    ]
})
export class PrivacyPolicyPage implements OnInit {

    title = 'Privacy Policy';

    constructor() { }

    ngOnInit() {
    }

}
