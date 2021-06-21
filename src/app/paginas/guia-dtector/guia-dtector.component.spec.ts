import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiaDtectorComponent } from './guia-dtector.component';

describe('GuiaDtectorComponent', () => {
  let component: GuiaDtectorComponent;
  let fixture: ComponentFixture<GuiaDtectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuiaDtectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuiaDtectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
