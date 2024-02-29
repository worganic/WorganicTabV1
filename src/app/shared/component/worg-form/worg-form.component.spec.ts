import { ComponentFixture, TestBed } from '@angular/core/testing';


import { WorgFormComponent } from './worg-form.component';


describe('WorgFormComponent', () => {
  let component: WorgFormComponent;
  let fixture: ComponentFixture<WorgFormComponent>;


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorgFormComponent]
    });
    fixture = TestBed.createComponent(WorgFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



