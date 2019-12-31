import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoustrouverComponent } from './noustrouver.component';

describe('NoustrouverComponent', () => {
  let component: NoustrouverComponent;
  let fixture: ComponentFixture<NoustrouverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoustrouverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoustrouverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
