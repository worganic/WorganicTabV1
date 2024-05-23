import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorgMenuTutoComponent } from './worgMenuTuto.component';

describe('WorgMenuTutoComponent', () => {
  let component: WorgMenuTutoComponent;
  let fixture: ComponentFixture<WorgMenuTutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorgMenuTutoComponent]
    });
    fixture = TestBed.createComponent(WorgMenuTutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
