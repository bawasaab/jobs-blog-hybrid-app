import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobsClosingSoonPageRoutingModule } from './jobs-closing-soon-routing.module';

import { JobsClosingSoonPage } from './jobs-closing-soon.page';
import { ArticleCardComponent } from 'src/app/components/article-card/article-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobsClosingSoonPageRoutingModule
  ],
  declarations: [JobsClosingSoonPage, ArticleCardComponent]
})
export class JobsClosingSoonPageModule {}
