import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LatestJobsPage } from './latest-jobs.page';

const routes: Routes = [
  {
    path: '',
    component: LatestJobsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LatestJobsPageRoutingModule {}
