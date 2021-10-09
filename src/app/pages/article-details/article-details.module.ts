import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArticleDetailsPageRoutingModule } from './article-details-routing.module';

import { ArticleDetailsPage } from './article-details.page';
import { SafeHtmlPipe } from 'src/app/custom/pipes/safe-html.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArticleDetailsPageRoutingModule
  ],
  declarations: [
    ArticleDetailsPage, 
    SafeHtmlPipe
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
})
export class ArticleDetailsPageModule {}
