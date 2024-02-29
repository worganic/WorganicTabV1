import { ComponentFixture, TestBed } from '@angular/core/testing';


import { WorgMenuComponent } from './worg-menu.component';


describe('WorgMenuComponent', () => {
  let component: WorgMenuComponent;
  let fixture: ComponentFixture<WorgMenuComponent>;


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorgMenuComponent]
    });
    fixture = TestBed.createComponent(WorgMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



