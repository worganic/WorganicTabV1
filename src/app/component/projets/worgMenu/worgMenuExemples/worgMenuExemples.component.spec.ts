import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorgMenuExemplesComponent } from './worgMenuExemples.component';

describe('WorgMenuExemplesComponent', () => {
  let component: WorgMenuExemplesComponent;
  let fixture: ComponentFixture<WorgMenuExemplesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorgMenuExemplesComponent]
    });
    fixture = TestBed.createComponent(WorgMenuExemplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
