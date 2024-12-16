import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp6502reactiveFormComponent } from './cmp6502reactive-form.component';

describe('Cmp6502reactiveFormComponent', () => {
  let component: Cmp6502reactiveFormComponent;
  let fixture: ComponentFixture<Cmp6502reactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Cmp6502reactiveFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cmp6502reactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
