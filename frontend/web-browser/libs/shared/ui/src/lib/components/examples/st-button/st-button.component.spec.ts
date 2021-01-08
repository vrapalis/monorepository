import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StButtonComponent } from './st-button.component';

describe('StButtonComponent', () => {
  let component: StButtonComponent;
  let fixture: ComponentFixture<StButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
