import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HowToChooseTheRightGovernmentJobForYouInIndiaPage } from './how-to-choose-the-right-government-job-for-you-in-india.page';

const routes: Routes = [
  {
    path: '',
    component: HowToChooseTheRightGovernmentJobForYouInIndiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HowToChooseTheRightGovernmentJobForYouInIndiaPageRoutingModule {}
