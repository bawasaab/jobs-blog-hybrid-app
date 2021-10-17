import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Capacitor } from '@capacitor/core';
import {
	ActionPerformed,
	PushNotificationSchema,
	PushNotifications,
	Token,
} from '@capacitor/push-notifications';

@Injectable({
	providedIn: 'root'
})
export class FcmService {

	constructor( private router: Router ) {}

	initPush() {
		if( Capacitor.platform !== 'web' ) {
			this.resgisterPush();
		}
	}
	
	resgisterPush() {

		// Request permission to use push notifications
		// iOS will prompt user and return if they granted permission or not
    	// Android will just grant without prompting
		PushNotifications.requestPermissions()
		.then( (permission) => {
			
			if( permission.receive ) {

				PushNotifications.register();
			} else {
				console.log('No permission granted for push notifications');
			}
		} )
		.catch( (ex) => {
			console.log('fcm resgisterPush', ex);
		} );

		/**
		 * fcm listeners starts here
		 */

		// On success, we should be able to receive notifications
		PushNotifications.addListener('registration',
			(token: Token) => {
				// alert('Push registration success, token: ' + token.value);
				console.log('Push registration success, token: ' + token.value);
			}
	  	);

		// Some issue with our setup and push will not work
		PushNotifications.addListener('registrationError',
			(error: any) => {
				// alert('Error on registration: ' + JSON.stringify(error));
				console.log('Error on registration: ' + JSON.stringify(error));
			}
		);

		// Show us the notification payload if the app is open on our device
		PushNotifications.addListener('pushNotificationReceived',
			(notification: PushNotificationSchema) => {
				// alert('Push received: ' + JSON.stringify(notification));
				console.log('Push received: ' + JSON.stringify(notification));
			}
		);

		// Method called when tapping on a notification
		PushNotifications.addListener('pushNotificationActionPerformed',
			(notification: ActionPerformed) => {
				console.log('Push action performed: ' + JSON.stringify(notification));
			}
		);

		/**
		 * fcm listeners ends here
		 */
	}
}
