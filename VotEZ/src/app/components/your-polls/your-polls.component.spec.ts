import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourPollsComponent } from './your-polls.component';

describe('YourPollsComponent', () => {
  let component: YourPollsComponent;
  let fixture: ComponentFixture<YourPollsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourPollsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YourPollsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
