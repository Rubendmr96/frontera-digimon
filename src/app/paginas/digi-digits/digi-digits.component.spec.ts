import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigiDigitsComponent } from './digi-digits.component';

describe('DigiDigitsComponent', () => {
  let component: DigiDigitsComponent;
  let fixture: ComponentFixture<DigiDigitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigiDigitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigiDigitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
