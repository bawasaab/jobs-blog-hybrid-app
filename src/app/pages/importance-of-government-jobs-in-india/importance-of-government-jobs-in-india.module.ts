import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImportanceOfGovernmentJobsInIndiaPageRoutingModule } from './importance-of-government-jobs-in-india-routing.module';

import { ImportanceOfGovernmentJobsInIndiaPage } from './importance-of-government-jobs-in-india.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImportanceOfGovernmentJobsInIndiaPageRoutingModule
  ],
  declarations: [ImportanceOfGovernmentJobsInIndiaPage]
})
export class ImportanceOfGovernmentJobsInIndiaPageModule {}
