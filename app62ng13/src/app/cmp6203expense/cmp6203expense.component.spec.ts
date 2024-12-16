import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp6203expenseComponent } from './cmp6203expense.component';

describe('Cmp6203expenseComponent', () => {
  let component: Cmp6203expenseComponent;
  let fixture: ComponentFixture<Cmp6203expenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Cmp6203expenseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cmp6203expenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
