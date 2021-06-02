import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietfixHomeComponent } from './dietfix-home.component';

describe('DietfixHomeComponent', () => {
  let component: DietfixHomeComponent;
  let fixture: ComponentFixture<DietfixHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DietfixHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DietfixHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
