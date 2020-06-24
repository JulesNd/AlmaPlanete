import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chaussuresdetails1Component } from './chaussuresdetails1.component';

describe('Chaussuresdetails1Component', () => {
  let component: Chaussuresdetails1Component;
  let fixture: ComponentFixture<Chaussuresdetails1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chaussuresdetails1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chaussuresdetails1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
