import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySecondCardComponent } from './my-second-card.component';

describe('MySecondCardComponent', () => {
  let component: MySecondCardComponent;
  let fixture: ComponentFixture<MySecondCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySecondCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MySecondCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
