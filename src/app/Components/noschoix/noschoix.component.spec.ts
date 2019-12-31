import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoschoixComponent } from './noschoix.component';

describe('NoschoixComponent', () => {
  let component: NoschoixComponent;
  let fixture: ComponentFixture<NoschoixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoschoixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoschoixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
