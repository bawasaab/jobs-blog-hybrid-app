import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'latest-jobs',
    loadChildren: () => import('./pages/latest-jobs/latest-jobs.module').then( m => m.LatestJobsPageModule)
  },
  {
    path: 'jobs-closing-soon',
    loadChildren: () => import('./pages/jobs-closing-soon/jobs-closing-soon.module').then( m => m.JobsClosingSoonPageModule)
  },
  {
    path: 'upcoming-jobs',
    loadChildren: () => import('./pages/upcoming-jobs/upcoming-jobs.module').then( m => m.UpcomingJobsPageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./pages/about-us/about-us.module').then( m => m.AboutUsPageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./pages/contact-us/contact-us.module').then( m => m.ContactUsPageModule)
  },
  {
    path: 'disclaimer',
    loadChildren: () => import('./pages/disclaimer/disclaimer.module').then( m => m.DisclaimerPageModule)
  },
  {
    path: 'privacy-policy',
    loadChildren: () => import('./pages/privacy-policy/privacy-policy.module').then( m => m.PrivacyPolicyPageModule)
  },
  {
    path: 'faqs',
    loadChildren: () => import('./pages/faqs/faqs.module').then( m => m.FaqsPageModule)
  },
  {
    path: 'importance-of-government-jobs-in-india',
    loadChildren: () => import('./pages/importance-of-government-jobs-in-india/importance-of-government-jobs-in-india.module').then( m => m.ImportanceOfGovernmentJobsInIndiaPageModule)
  },
  {
    path: 'how-to-choose-the-right-government-job-for-you-in-india',
    loadChildren: () => import('./pages/how-to-choose-the-right-government-job-for-you-in-india/how-to-choose-the-right-government-job-for-you-in-india.module').then( m => m.HowToChooseTheRightGovernmentJobForYouInIndiaPageModule)
  },
  {
    path: 'article-details/:articleId',
    loadChildren: () => import('./pages/article-details/article-details.module').then( m => m.ArticleDetailsPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'search-jobs/:title/:str',
    loadChildren: () => import('./pages/search-jobs/search-jobs.module').then( m => m.SearchJobsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
