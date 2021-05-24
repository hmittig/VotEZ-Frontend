import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollVotesComponent } from './poll-votes.component';

describe('PollVotesComponent', () => {
  let component: PollVotesComponent;
  let fixture: ComponentFixture<PollVotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PollVotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PollVotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
