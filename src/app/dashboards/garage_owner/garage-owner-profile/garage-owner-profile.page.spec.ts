import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GarageOwnerProfilePage } from './garage-owner-profile.page';

describe('GarageOwnerProfilePage', () => {
  let component: GarageOwnerProfilePage;
  let fixture: ComponentFixture<GarageOwnerProfilePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GarageOwnerProfilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GarageOwnerProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
