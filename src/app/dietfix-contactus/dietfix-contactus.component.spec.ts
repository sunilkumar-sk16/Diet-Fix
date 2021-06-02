import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietfixContactusComponent } from './dietfix-contactus.component';

describe('DietfixContactusComponent', () => {
  let component: DietfixContactusComponent;
  let fixture: ComponentFixture<DietfixContactusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DietfixContactusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DietfixContactusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
