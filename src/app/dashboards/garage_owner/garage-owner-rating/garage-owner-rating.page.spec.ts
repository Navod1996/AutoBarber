import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GarageOwnerRatingPage } from './garage-owner-rating.page';

describe('GarageOwnerRatingPage', () => {
  let component: GarageOwnerRatingPage;
  let fixture: ComponentFixture<GarageOwnerRatingPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GarageOwnerRatingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GarageOwnerRatingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
