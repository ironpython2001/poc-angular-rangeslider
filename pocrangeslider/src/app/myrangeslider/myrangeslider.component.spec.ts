import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyrangesliderComponent } from './myrangeslider.component';

describe('MyrangesliderComponent', () => {
  let component: MyrangesliderComponent;
  let fixture: ComponentFixture<MyrangesliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyrangesliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyrangesliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
