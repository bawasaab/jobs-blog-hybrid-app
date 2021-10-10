import { Component, OnInit } from '@angular/core';
import { slideLeft } from 'src/app/custom/animations/slideLeft';

@Component({
    selector: 'app-disclaimer',
    templateUrl: './disclaimer.page.html',
    styleUrls: ['./disclaimer.page.scss'],
    animations: [
        slideLeft
    ]
})
export class DisclaimerPage implements OnInit {

    title = 'Disclaimer';

    constructor() { }

    ngOnInit() {
    }

}
