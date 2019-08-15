import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromusuarioComponent } from './fromusuario.component';

describe('FromusuarioComponent', () => {
  let component: FromusuarioComponent;
  let fixture: ComponentFixture<FromusuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromusuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
