import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

// import { ConstantService } from './constant.service';

@Injectable({
	providedIn: 'root'
})
export class ArticlesService {

	constructor(
		private httpClient: HttpClient,
	) { }

	getAllArticles() {

        let url = `https://www.jobsnplacements.com/api/articles`;
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

        let url = `https://www.jobsnplacements.com/api/articles/${id}`;
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
