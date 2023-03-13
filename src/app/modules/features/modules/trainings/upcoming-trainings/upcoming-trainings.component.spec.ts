import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingTrainingsComponent } from './upcoming-trainings.component';

describe('UpcomingTrainingsComponent', () => {
  let component: UpcomingTrainingsComponent;
  let fixture: ComponentFixture<UpcomingTrainingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingTrainingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingTrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
