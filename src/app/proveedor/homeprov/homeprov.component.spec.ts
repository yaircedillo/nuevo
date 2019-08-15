import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeprovComponent } from './homeprov.component';

describe('HomeprovComponent', () => {
  let component: HomeprovComponent;
  let fixture: ComponentFixture<HomeprovComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeprovComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeprovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
