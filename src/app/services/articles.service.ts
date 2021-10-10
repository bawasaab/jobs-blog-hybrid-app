import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ConstantService } from './constant.service';

@Injectable({
	providedIn: 'root'
})
export class ArticlesService {

	constructor(
		private httpClient: HttpClient,
        private constantService: ConstantService,
	) { }

	getAllArticles() {

        let url = `${this.constantService.apiBaseUrl}/articles`;
        // search != undefined ? (url = `${url}?searchTxt=${search}`) : '';
        console.log('url', url);
        return this.httpClient
            .get(url)
            .pipe(
                map((e: any) => e),
                catchError((e: Response) => throwError(e))
            );
    }

    getArticleById( id ) {

        let url = `${this.constantService.apiBaseUrl}/articles/${id}`;
        // search != undefined ? (url = `${url}?searchTxt=${search}`) : '';
        console.log('url', url);
        return this.httpClient
            .get(url)
            .pipe(
                map((e: any) => e),
                catchError((e: Response) => throwError(e))
            );
    }
}
