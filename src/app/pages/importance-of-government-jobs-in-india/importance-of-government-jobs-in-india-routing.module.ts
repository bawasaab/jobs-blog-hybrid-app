import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImportanceOfGovernmentJobsInIndiaPage } from './importance-of-government-jobs-in-india.page';

const routes: Routes = [
  {
    path: '',
    component: ImportanceOfGovernmentJobsInIndiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImportanceOfGovernmentJobsInIndiaPageRoutingModule {}
