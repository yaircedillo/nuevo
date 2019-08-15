import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeinsumoComponent } from './homeinsumo.component';

describe('HomeinsumoComponent', () => {
  let component: HomeinsumoComponent;
  let fixture: ComponentFixture<HomeinsumoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeinsumoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeinsumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
