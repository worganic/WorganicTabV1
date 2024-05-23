import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorgTabTutoComponent } from './worgTabTuto.component';

describe('WorgTabTutoComponent', () => {
  let component: WorgTabTutoComponent;
  let fixture: ComponentFixture<WorgTabTutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorgTabTutoComponent]
    });
    fixture = TestBed.createComponent(WorgTabTutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
