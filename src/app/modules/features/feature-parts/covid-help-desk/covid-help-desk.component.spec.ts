import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidHelpDeskComponent } from './covid-help-desk.component';

describe('CovidHelpDeskComponent', () => {
  let component: CovidHelpDeskComponent;
  let fixture: ComponentFixture<CovidHelpDeskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidHelpDeskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidHelpDeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
