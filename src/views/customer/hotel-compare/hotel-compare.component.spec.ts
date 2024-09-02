import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelCompareComponent } from './hotel-compare.component';

describe('HotelCompareComponent', () => {
  let component: HotelCompareComponent;
  let fixture: ComponentFixture<HotelCompareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelCompareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
