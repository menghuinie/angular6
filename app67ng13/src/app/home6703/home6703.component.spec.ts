import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home6703Component } from './home6703.component';

describe('Home6703Component', () => {
  let component: Home6703Component;
  let fixture: ComponentFixture<Home6703Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Home6703Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home6703Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
