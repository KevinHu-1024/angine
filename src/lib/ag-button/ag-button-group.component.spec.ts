import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgButtonGroupComponent } from './ag-button.component';

describe('ButtonGroupComponent', () => {
  let component: AgButtonGroupComponent;
  let fixture: ComponentFixture<AgButtonGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AgButtonGroupComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgButtonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
