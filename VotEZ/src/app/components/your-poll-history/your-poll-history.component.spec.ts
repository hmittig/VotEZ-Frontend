import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourPollHistoryComponent } from './your-poll-history.component';

describe('YourPollHistoryComponent', () => {
  let component: YourPollHistoryComponent;
  let fixture: ComponentFixture<YourPollHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourPollHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YourPollHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
