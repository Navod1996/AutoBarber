import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GarageOwnerDashboardPage } from './garage-owner-dashboard.page';

describe('GarageOwnerDashboardPage', () => {
  let component: GarageOwnerDashboardPage;
  let fixture: ComponentFixture<GarageOwnerDashboardPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GarageOwnerDashboardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GarageOwnerDashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
