import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentionlegalComponent } from './mentionlegal.component';

describe('MentionlegalComponent', () => {
  let component: MentionlegalComponent;
  let fixture: ComponentFixture<MentionlegalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentionlegalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentionlegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
