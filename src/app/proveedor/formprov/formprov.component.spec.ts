import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormprovComponent } from './formprov.component';

describe('FormprovComponent', () => {
  let component: FormprovComponent;
  let fixture: ComponentFixture<FormprovComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormprovComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormprovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
