import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Capacitor } from '@capacitor/core';
import { HttpClient } from '@angular/common/http';
import { ConstantService } from './constant.service';
import { map } from 'rxjs/internal/operators/map';
import { catchError } from 'rxjs/internal/operators/catchError';
import { throwError } from 'rxjs/internal/observable/throwError';
import { Observable, Subject } from 'rxjs';
import { DeviceService } from "./device.service";
import { AlertController } from '@ionic/angular';

import { FCM } from "@capacitor-community/fcm";
import {
	ActionPerformed,
	PushNotificationSchema,
	PushNotifications,
	Token,
} from '@capacitor/push-notifications';
import { ToasterService } from '../custom/services/toaster.service';

let $this;
@Injectable({
	providedIn: 'root'
})
export class FcmService {

	deviceToken;

	public fcmToken$ = new Subject();
	public fcmToken : string = '';
	deviceInfo: any;

	constructor( 
		private router: Router,
		private platform: Platform,
		private httpClient: HttpClient,
		private constantService: ConstantService,
		private deviceService: DeviceService,
		protected toasterService: ToasterService,
		public alertController: AlertController
	) {
		$this = this;
		this.fcmToken$.asObservable();
	}

	initPush() {

		if( Capacitor.platform !== 'web' ) {
			this.resgisterPush();
		} else {
			console.log('Capacitor.platform is web so no push init', Capacitor.platform);
		}
	}

	tokenSet() {

		console.log('inside tokenSet');
		this.fcmToken$.next( this.fcmToken );
	}
	
	async resgisterPush() {

		// Request permission to use push notifications
		// iOS will prompt user and return if they granted permission or not
    	// Android will just grant without prompting
		PushNotifications.requestPermissions()
		.then( async (permission) => {
			
			if( permission.receive ) {

				console.log('Permission Received', permission.receive);
				PushNotifications.register()
				.then( (result) => {
					console.log( 'PushNotifications.register result', result );
				} )
				.catch( (ex) => {
					console.log( 'PushNotifications.register exception', ex );
				} );
			} else {
				console.log('No permission granted for push notifications');
			}
		} )
		.catch( (ex) => {
			console.log('fcm resgisterPush exception', ex);
		} );

		/**
		 * fcm listeners starts here
		 */

		// On success, we should be able to receive notifications
		PushNotifications.addListener('registration',
			async (token: Token) => {
				// alert('Push registration success, token: ' + token.value);
				try {

					console.log('Push registration success, token: ' + token.value);
	
					this.fcmToken = token.value;
					let subscription = await FCM.subscribeTo({ 
						topic: "instantNotifications" 
					});
					console.log('topic subscription subscribed', subscription);
					this.tokenSet();
				} catch(ex) {
					throw ex;
				}
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
				this.presentAlertConfirm( notification );
			}
		);

		// Method called when tapping on a notification
		PushNotifications.addListener('pushNotificationActionPerformed',
			// (notification: ActionPerformed) => {
			(notification: any) => {
				console.log('Push action performed: ' + JSON.stringify(notification));
				// this.router.navigate([`article-details/${notification.notification.data.article_slug}`]);
				this.presentAlertConfirm2( notification );
			}
		);

		/**
		 * fcm listeners ends here
		 */
	}

	async getDeviceToken() {

		try {

			let result = this.deviceService.getDeviceInfo();
			return result;

		} catch( ex ) {

			throw ex;
		}
	}

	saveFcmToken( token, deviceInfo ): Observable<any> {

		let in_data = {
			fcm_device_type: 'ANDROID',
			fcm_token: token,
			device_token: deviceInfo.device_id,
			device_info: deviceInfo.device_info,
		};

		let url = `${this.constantService.apiBaseUrl}/fcm`;
		return this.httpClient
		.post(url, in_data)
		.pipe(
			map((e: any) => e),
			catchError((e: Response) => throwError(e))
		);
	}

	async presentAlertConfirm( notification: PushNotificationSchema ) {
		const alert = await this.alertController.create({
		  cssClass: 'my-custom-class',
		  header: 'New Job Alert',
		  subHeader: notification.title,
		  message: notification.body,
		  buttons: [
			{
			  text: 'Dismiss',
			  role: 'cancel',
			  cssClass: 'secondary',
			  handler: (blah) => {
				console.log('Confirm Cancel: blah');
			  }
			}, {
			  text: 'Show',
			  handler: () => {
				console.log('Confirm Okay');
				this.router.navigate([`article-details/${notification.data.article_slug}`]);
			  }
			}
		  ]
		});
	
		await alert.present();
	}

	async presentAlertConfirm2( notification: any ) {
		const alert = await this.alertController.create({
		  cssClass: 'my-custom-class',
		  header: 'New Job Alert',
		  subHeader: notification.title,
		  message: notification.body,
		  buttons: [
			{
			  text: 'Dismiss',
			  role: 'cancel',
			  cssClass: 'secondary',
			  handler: (blah) => {
				console.log('Confirm Cancel: blah');
			  }
			}, {
			  text: 'Show',
			  handler: () => {
				console.log('Confirm Okay');
				// this.router.navigate([`article-details/${notification.data.article_slug}`]);
				this.router.navigate([`article-details/${notification.notification.data.article_slug}`]);
			  }
			}
		  ]
		});
	
		await alert.present();
	}
}
