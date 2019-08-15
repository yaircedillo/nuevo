import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepuestoComponent } from './homepuesto.component';

describe('HomepuestoComponent', () => {
  let component: HomepuestoComponent;
  let fixture: ComponentFixture<HomepuestoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepuestoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepuestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
