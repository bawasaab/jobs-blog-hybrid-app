import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ConstantService } from './constant.service';

@Injectable({
	providedIn: 'root'
})
export class SubscribeNewsletterService {

	constructor(
		private httpClient: HttpClient,
		private constantService: ConstantService,
	) { }

	// newsLetterSubscribe
	newsLetterSubscribe( in_data ) {        
        let url = `${this.constantService.apiBaseUrl}/newsletter/subscribe`;
        return this.httpClient
            .post(url, in_data)
            .pipe(
                map((e: any) => e),
                catchError((e: Response) => throwError(e))
            );
    }
}
