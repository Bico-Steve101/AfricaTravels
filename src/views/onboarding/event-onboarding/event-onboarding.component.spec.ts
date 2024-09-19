import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventOnboardingComponent } from './event-onboarding.component';

describe('EventOnboardingComponent', () => {
  let component: EventOnboardingComponent;
  let fixture: ComponentFixture<EventOnboardingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventOnboardingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventOnboardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
