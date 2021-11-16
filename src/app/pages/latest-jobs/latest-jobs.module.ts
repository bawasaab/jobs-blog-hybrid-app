import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LatestJobsPageRoutingModule } from './latest-jobs-routing.module';

import { LatestJobsPage } from './latest-jobs.page';

import { SharedModule } from "../../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LatestJobsPageRoutingModule,
    SharedModule
  ],
  declarations: [LatestJobsPage]
})
export class LatestJobsPageModule {}
