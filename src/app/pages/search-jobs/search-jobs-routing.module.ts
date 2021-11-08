import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchJobsPage } from './search-jobs.page';

const routes: Routes = [
  {
    path: '',
    component: SearchJobsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchJobsPageRoutingModule {}
