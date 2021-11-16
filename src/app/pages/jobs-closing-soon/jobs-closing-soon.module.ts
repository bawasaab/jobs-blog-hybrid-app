import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobsClosingSoonPageRoutingModule } from './jobs-closing-soon-routing.module';

import { JobsClosingSoonPage } from './jobs-closing-soon.page';

import { SharedModule } from "../../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobsClosingSoonPageRoutingModule,
    SharedModule
  ],
  declarations: [JobsClosingSoonPage]
})
export class JobsClosingSoonPageModule {}
