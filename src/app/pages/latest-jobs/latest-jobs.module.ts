import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LatestJobsPageRoutingModule } from './latest-jobs-routing.module';

import { LatestJobsPage } from './latest-jobs.page';
import { ArticleCardComponent } from 'src/app/components/article-card/article-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LatestJobsPageRoutingModule
  ],
  declarations: [LatestJobsPage, ArticleCardComponent]
})
export class LatestJobsPageModule {}
