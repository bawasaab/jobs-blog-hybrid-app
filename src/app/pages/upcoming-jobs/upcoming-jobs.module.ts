import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpcomingJobsPageRoutingModule } from './upcoming-jobs-routing.module';

import { UpcomingJobsPage } from './upcoming-jobs.page';

import { SharedModule } from "../../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpcomingJobsPageRoutingModule,
    SharedModule
  ],
  declarations: [UpcomingJobsPage]
})
export class UpcomingJobsPageModule {}
