import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrompuestoComponent } from './frompuesto.component';

describe('FrompuestoComponent', () => {
  let component: FrompuestoComponent;
  let fixture: ComponentFixture<FrompuestoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrompuestoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrompuestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
