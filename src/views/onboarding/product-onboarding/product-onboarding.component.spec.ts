import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOnboardingComponent } from './product-onboarding.component';

describe('ProductOnboardingComponent', () => {
  let component: ProductOnboardingComponent;
  let fixture: ComponentFixture<ProductOnboardingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductOnboardingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductOnboardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
