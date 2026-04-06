import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAppAuthComponent } from './my-app-auth.component';

describe('MyAppAuthComponent', () => {
  let component: MyAppAuthComponent;
  let fixture: ComponentFixture<MyAppAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyAppAuthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyAppAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
