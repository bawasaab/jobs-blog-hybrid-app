import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HowToChooseTheRightGovernmentJobForYouInIndiaPageRoutingModule } from './how-to-choose-the-right-government-job-for-you-in-india-routing.module';

import { HowToChooseTheRightGovernmentJobForYouInIndiaPage } from './how-to-choose-the-right-government-job-for-you-in-india.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HowToChooseTheRightGovernmentJobForYouInIndiaPageRoutingModule
  ],
  declarations: [HowToChooseTheRightGovernmentJobForYouInIndiaPage]
})
export class HowToChooseTheRightGovernmentJobForYouInIndiaPageModule {}
