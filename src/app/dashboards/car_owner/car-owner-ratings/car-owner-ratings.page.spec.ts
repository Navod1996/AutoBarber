import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarOwnerRatingsPage } from './car-owner-ratings.page';

describe('CarOwnerRatingsPage', () => {
  let component: CarOwnerRatingsPage;
  let fixture: ComponentFixture<CarOwnerRatingsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CarOwnerRatingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarOwnerRatingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
