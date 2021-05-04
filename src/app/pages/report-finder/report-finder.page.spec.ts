import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReportFinderPage } from './report-finder.page';

describe('ReportFinderPage', () => {
  let component: ReportFinderPage;
  let fixture: ComponentFixture<ReportFinderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportFinderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReportFinderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
