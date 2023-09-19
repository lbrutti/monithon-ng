import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SorgentiPage } from './sorgenti.page';

describe('TemiPage', () => {
    let component: SorgentiPage;
    let fixture: ComponentFixture<SorgentiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [SorgentiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

      fixture = TestBed.createComponent(SorgentiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
