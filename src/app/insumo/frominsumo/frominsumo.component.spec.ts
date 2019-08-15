import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrominsumoComponent } from './frominsumo.component';

describe('FrominsumoComponent', () => {
  let component: FrominsumoComponent;
  let fixture: ComponentFixture<FrominsumoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrominsumoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrominsumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
