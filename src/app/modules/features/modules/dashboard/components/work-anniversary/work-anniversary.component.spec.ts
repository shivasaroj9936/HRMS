import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkAnniversaryComponent } from './work-anniversary.component';

describe('WorkAnniversaryComponent', () => {
  let component: WorkAnniversaryComponent;
  let fixture: ComponentFixture<WorkAnniversaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkAnniversaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkAnniversaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
