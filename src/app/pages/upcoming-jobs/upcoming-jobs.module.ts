import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpcomingJobsPageRoutingModule } from './upcoming-jobs-routing.module';

import { UpcomingJobsPage } from './upcoming-jobs.page';
import { ArticleCardComponent } from 'src/app/components/article-card/article-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpcomingJobsPageRoutingModule
  ],
  declarations: [UpcomingJobsPage, ArticleCardComponent]
})
export class UpcomingJobsPageModule {}
