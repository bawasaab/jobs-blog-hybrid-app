import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImportanceOfGovernmentJobsInIndiaPage } from './importance-of-government-jobs-in-india.page';

describe('ImportanceOfGovernmentJobsInIndiaPage', () => {
  let component: ImportanceOfGovernmentJobsInIndiaPage;
  let fixture: ComponentFixture<ImportanceOfGovernmentJobsInIndiaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportanceOfGovernmentJobsInIndiaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImportanceOfGovernmentJobsInIndiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
