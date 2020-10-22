import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DansnoschaussuresComponent } from './dansnoschaussures.component';

describe('DansnoschaussuresComponent', () => {
  let component: DansnoschaussuresComponent;
  let fixture: ComponentFixture<DansnoschaussuresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DansnoschaussuresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DansnoschaussuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
