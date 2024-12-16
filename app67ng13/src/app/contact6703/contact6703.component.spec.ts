import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contact6703Component } from './contact6703.component';

describe('Contact6703Component', () => {
  let component: Contact6703Component;
  let fixture: ComponentFixture<Contact6703Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Contact6703Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contact6703Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
