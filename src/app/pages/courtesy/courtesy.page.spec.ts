import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CourtesyPage } from './courtesy.page';

describe('CourtesyPage', () => {
  let component: CourtesyPage;
  let fixture: ComponentFixture<CourtesyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourtesyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CourtesyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
