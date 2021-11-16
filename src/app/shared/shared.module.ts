import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleCardComponent } from '../components/article-card/article-card.component';

@NgModule({
  declarations: [
    ArticleCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ArticleCardComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SharedModule { }
