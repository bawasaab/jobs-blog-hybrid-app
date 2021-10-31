import { Component, OnInit } from '@angular/core';
import { slideLeft } from 'src/app/custom/animations/slideLeft';
import { FcmService } from 'src/app/services/fcm.service';

@Component({
	selector: 'app-settings',
	templateUrl: './settings.page.html',
	styleUrls: ['./settings.page.scss'],
	animations: [
        slideLeft
    ]
})
export class SettingsPage implements OnInit {

	title = 'Settings';
	instantNotifications: boolean = false;

	constructor(
		private fcmService: FcmService,
	) { }

	ngOnInit() {
	}

	fcmNotifications( event ) {

		if( event.detail.checked ) {
			console.log('subscribe to fcm');
			this.subscribeToFcm();

		} else {
			console.log('un-subscribe from fcm');
		}
	}

	subscribeToFcm() {

		console.log('inside subscribeToFcm');
		// Trigger the push setup
		this.fcmService.initPush();

		this.fcmService.fcmToken$.subscribe( async (fcmToken: any) => {

			console.log('inside subcription');
			console.log('inside subcription FCM token', fcmToken);

			let deviceInfo = await this.fcmService.getDeviceToken();
			console.log('inside subcription deviceInfo', deviceInfo);

			this.fcmService.saveFcmToken( fcmToken, deviceInfo ).subscribe(
				(result) => {
					console.log('inside subcription saveFcmToken result', result);
				},
				(err) => {
					console.log('inside subcription saveFcmToken err', err);
				},
			);
		} );
	}
}
