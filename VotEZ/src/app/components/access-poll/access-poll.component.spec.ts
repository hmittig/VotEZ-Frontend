import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessPollComponent } from './access-poll.component';

describe('AccessPollComponent', () => {
  let component: AccessPollComponent;
  let fixture: ComponentFixture<AccessPollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessPollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessPollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
