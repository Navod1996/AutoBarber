import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AsAGarageOwnerPage } from './as-a-garage-owner.page';

describe('AsAGarageOwnerPage', () => {
  let component: AsAGarageOwnerPage;
  let fixture: ComponentFixture<AsAGarageOwnerPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AsAGarageOwnerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AsAGarageOwnerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
