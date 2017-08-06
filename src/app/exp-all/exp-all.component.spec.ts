import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpAllComponent } from './exp-all.component';

describe('ExpAllComponent', () => {
  let component: ExpAllComponent;
  let fixture: ComponentFixture<ExpAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
