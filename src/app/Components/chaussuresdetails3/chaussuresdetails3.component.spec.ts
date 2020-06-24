import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chaussuresdetails3Component } from './chaussuresdetails3.component';

describe('Chaussuresdetails3Component', () => {
  let component: Chaussuresdetails3Component;
  let fixture: ComponentFixture<Chaussuresdetails3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chaussuresdetails3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chaussuresdetails3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
