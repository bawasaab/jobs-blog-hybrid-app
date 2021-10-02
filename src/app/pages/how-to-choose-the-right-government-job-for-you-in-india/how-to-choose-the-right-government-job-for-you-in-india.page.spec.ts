import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HowToChooseTheRightGovernmentJobForYouInIndiaPage } from './how-to-choose-the-right-government-job-for-you-in-india.page';

describe('HowToChooseTheRightGovernmentJobForYouInIndiaPage', () => {
  let component: HowToChooseTheRightGovernmentJobForYouInIndiaPage;
  let fixture: ComponentFixture<HowToChooseTheRightGovernmentJobForYouInIndiaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HowToChooseTheRightGovernmentJobForYouInIndiaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HowToChooseTheRightGovernmentJobForYouInIndiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
