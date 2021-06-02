import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietfixRecipesComponent } from './dietfix-recipes.component';

describe('DietfixRecipesComponent', () => {
  let component: DietfixRecipesComponent;
  let fixture: ComponentFixture<DietfixRecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DietfixRecipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DietfixRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
