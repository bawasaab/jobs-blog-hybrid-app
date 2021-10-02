import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpcomingJobsPage } from './upcoming-jobs.page';

const routes: Routes = [
  {
    path: '',
    component: UpcomingJobsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpcomingJobsPageRoutingModule {}
