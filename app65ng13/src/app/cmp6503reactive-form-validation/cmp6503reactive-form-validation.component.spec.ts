import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp6503reactiveFormValidationComponent } from './cmp6503reactive-form-validation.component';

describe('Cmp6503reactiveFormValidationComponent', () => {
  let component: Cmp6503reactiveFormValidationComponent;
  let fixture: ComponentFixture<Cmp6503reactiveFormValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Cmp6503reactiveFormValidationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cmp6503reactiveFormValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
