import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Branch0002Component } from './branch-0002.component';

describe('Branch0002Component', () => {
  let component: Branch0002Component;
  let fixture: ComponentFixture<Branch0002Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Branch0002Component]
    });
    fixture = TestBed.createComponent(Branch0002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
