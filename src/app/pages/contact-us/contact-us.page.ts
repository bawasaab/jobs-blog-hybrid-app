import { Component, OnInit } from '@angular/core';
import { ContactUsService } from 'src/app/services/contact-us.service';
import { LoaderService } from 'src/app/custom/services/loader.service';
import { ToasterService } from 'src/app/custom/services/toaster.service';
import { slideLeft } from 'src/app/custom/animations/slideLeft';

@Component({
    selector: 'app-contact-us',
    templateUrl: './contact-us.page.html',
    styleUrls: ['./contact-us.page.scss'],
    animations: [
        slideLeft
    ]
})
export class ContactUsPage implements OnInit {

    title = 'Contact Us';
    todo = {};
    isSubmit = false;

    constructor(
        protected contactUs: ContactUsService,
        protected toasterService: ToasterService,
        protected loaderService: LoaderService
    ) { }

    ngOnInit() {
    }

    async handleSubmit( frmObj: any ) {

        if( !frmObj.submitted ) {
          console.log('not submitted');
          return;
        }

        if( frmObj.invalid ) {
            console.log('invalid');
            return;
        }
    
        let in_data = frmObj.value;
        console.log('in_data', in_data);

        await this.loaderService.open();
        this.contactUs.contactUs( in_data ).subscribe(
            async (result) => {
                console.log('result.msg', result.msg);
                this.toasterService.presentToast(result.msg);
                frmObj.submitted = false;
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
}
