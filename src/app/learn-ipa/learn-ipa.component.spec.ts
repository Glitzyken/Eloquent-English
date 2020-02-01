import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnIpaComponent } from './learn-ipa.component';

describe('LearnIpaComponent', () => {
  let component: LearnIpaComponent;
  let fixture: ComponentFixture<LearnIpaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnIpaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnIpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
