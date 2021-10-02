import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobsClosingSoonPage } from './jobs-closing-soon.page';

const routes: Routes = [
  {
    path: '',
    component: JobsClosingSoonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobsClosingSoonPageRoutingModule {}
