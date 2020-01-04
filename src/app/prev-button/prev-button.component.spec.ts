import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevButtonComponent } from './prev-button.component';

describe('PrevButtonComponent', () => {
  let component: PrevButtonComponent;
  let fixture: ComponentFixture<PrevButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrevButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
