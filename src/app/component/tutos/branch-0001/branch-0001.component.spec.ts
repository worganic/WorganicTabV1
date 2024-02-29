import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Branch0001Component } from './branch-0001.component';

describe('Branch0001Component', () => {
  let component: Branch0001Component;
  let fixture: ComponentFixture<Branch0001Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Branch0001Component]
    });
    fixture = TestBed.createComponent(Branch0001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
