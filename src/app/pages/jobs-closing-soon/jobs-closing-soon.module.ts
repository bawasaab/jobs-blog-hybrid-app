import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobsClosingSoonPageRoutingModule } from './jobs-closing-soon-routing.module';

import { JobsClosingSoonPage } from './jobs-closing-soon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobsClosingSoonPageRoutingModule
  ],
  declarations: [JobsClosingSoonPage]
})
export class JobsClosingSoonPageModule {}
