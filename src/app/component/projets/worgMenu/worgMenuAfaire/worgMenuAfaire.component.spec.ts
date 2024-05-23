import { ComponentFixture, TestBed } from '@angular/core/testing';

import { worgMenuAfaireComponent } from './worgMenuAfaire.component';

describe('worgMenuAfaireComponent', () => {
  let component: worgMenuAfaireComponent;
  let fixture: ComponentFixture<worgMenuAfaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [worgMenuAfaireComponent]
    });
    fixture = TestBed.createComponent(worgMenuAfaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
