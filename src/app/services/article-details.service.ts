import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleDetailsService {

  articleDetails$: BehaviorSubject<{}> = new BehaviorSubject({});
  private articleDetails = {};

  constructor() {
    this.articleDetails$.asObservable();
  }

  setArticle( in_articleDetails ) {

    this.articleDetails = in_articleDetails;
    this.articleDetails$.next( this.articleDetails );
  }
}
