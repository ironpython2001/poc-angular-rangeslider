import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDrivenRangeSliderComponent } from './data-driven-range-slider.component';

describe('DataDrivenRangeSliderComponent', () => {
  let component: DataDrivenRangeSliderComponent;
  let fixture: ComponentFixture<DataDrivenRangeSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataDrivenRangeSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataDrivenRangeSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
