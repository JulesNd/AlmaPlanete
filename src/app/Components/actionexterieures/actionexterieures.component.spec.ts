import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionexterieuresComponent } from './actionexterieures.component';

describe('ActionexterieuresComponent', () => {
  let component: ActionexterieuresComponent;
  let fixture: ComponentFixture<ActionexterieuresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionexterieuresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionexterieuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
