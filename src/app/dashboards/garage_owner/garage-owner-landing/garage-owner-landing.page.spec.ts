import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GarageOwnerLandingPage } from './garage-owner-landing.page';

describe('GarageOwnerLandingPage', () => {
  let component: GarageOwnerLandingPage;
  let fixture: ComponentFixture<GarageOwnerLandingPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GarageOwnerLandingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GarageOwnerLandingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
