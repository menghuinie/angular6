import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Template1formsComponent } from './template1forms.component';

describe('Template1formsComponent', () => {
  let component: Template1formsComponent;
  let fixture: ComponentFixture<Template1formsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Template1formsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Template1formsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
