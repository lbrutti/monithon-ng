import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DettaglioProgettoComponent } from './dettaglio-progetto.component';

describe('DettaglioProgettoComponent', () => {
  let component: DettaglioProgettoComponent;
  let fixture: ComponentFixture<DettaglioProgettoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DettaglioProgettoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DettaglioProgettoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
