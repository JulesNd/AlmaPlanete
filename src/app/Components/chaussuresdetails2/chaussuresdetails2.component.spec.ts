import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chaussuresdetails2Component } from './chaussuresdetails2.component';

describe('Chaussuresdetails2Component', () => {
  let component: Chaussuresdetails2Component;
  let fixture: ComponentFixture<Chaussuresdetails2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chaussuresdetails2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chaussuresdetails2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
