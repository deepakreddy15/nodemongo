import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HcinemasComponent } from './hcinemas.component';

describe('HcinemasComponent', () => {
  let component: HcinemasComponent;
  let fixture: ComponentFixture<HcinemasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HcinemasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HcinemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
