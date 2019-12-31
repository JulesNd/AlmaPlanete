import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LejournalplaneteComponent } from './lejournalplanete.component';

describe('LejournalplaneteComponent', () => {
  let component: LejournalplaneteComponent;
  let fixture: ComponentFixture<LejournalplaneteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LejournalplaneteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LejournalplaneteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
