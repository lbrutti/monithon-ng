import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProjectFinderPage } from './project-finder.page';

describe('HomePage', () => {
  let component: ProjectFinderPage;
  let fixture: ComponentFixture<ProjectFinderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectFinderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectFinderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
