import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgButtonComponent } from './ag-button.component';

describe('ButtonComponent', () => {
  let component: AgButtonComponent;
  let fixture: ComponentFixture<AgButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
