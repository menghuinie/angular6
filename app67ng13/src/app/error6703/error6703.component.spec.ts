import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Error6703Component } from './error6703.component';

describe('Error6703Component', () => {
  let component: Error6703Component;
  let fixture: ComponentFixture<Error6703Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Error6703Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Error6703Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
