import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalWorksComponent } from './personal-works.component';

describe('PersonalWorksComponent', () => {
  let component: PersonalWorksComponent;
  let fixture: ComponentFixture<PersonalWorksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalWorksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
