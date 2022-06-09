import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TemiPage } from './temi.page';

describe('TemiPage', () => {
  let component: TemiPage;
  let fixture: ComponentFixture<TemiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TemiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
