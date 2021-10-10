import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ConstantService } from "./constant.service";

@Injectable({
    providedIn: 'root'
})
export class ContactUsService {

    constructor(
		private httpClient: HttpClient,
		private constantService: ConstantService,
	) { }

    contactUs( in_data ) {        
        let url = `${this.constantService.apiBaseUrl}/contact-us`;
        return this.httpClient
            .post(url, in_data)
            .pipe(
                map((e: any) => e),
                catchError((e: Response) => throwError(e))
            );
    }
}
