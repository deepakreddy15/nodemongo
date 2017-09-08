import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TickdetailsComponent } from './tickdetails.component';

describe('TickdetailsComponent', () => {
  let component: TickdetailsComponent;
  let fixture: ComponentFixture<TickdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TickdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TickdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
