import { ComponentFixture, TestBed } from '@angular/core/testing';

import { St3Component } from './st3.component';

describe('St3Component', () => {
  let component: St3Component;
  let fixture: ComponentFixture<St3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [St3Component]
    });
    fixture = TestBed.createComponent(St3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
