import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LatestJobsPageRoutingModule } from './latest-jobs-routing.module';

import { LatestJobsPage } from './latest-jobs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LatestJobsPageRoutingModule
  ],
  declarations: [LatestJobsPage]
})
export class LatestJobsPageModule {}
