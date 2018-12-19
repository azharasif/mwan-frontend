import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernewsComponent } from './usernews.component';

describe('UsernewsComponent', () => {
  let component: UsernewsComponent;
  let fixture: ComponentFixture<UsernewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsernewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsernewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
