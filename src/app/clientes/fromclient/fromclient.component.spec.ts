import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromclientComponent } from './fromclient.component';

describe('FromclientComponent', () => {
  let component: FromclientComponent;
  let fixture: ComponentFixture<FromclientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromclientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
