import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Product6703Component } from './product6703.component';

describe('Product6703Component', () => {
  let component: Product6703Component;
  let fixture: ComponentFixture<Product6703Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Product6703Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Product6703Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
