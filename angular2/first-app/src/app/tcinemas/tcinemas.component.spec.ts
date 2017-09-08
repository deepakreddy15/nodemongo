import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TcinemasComponent } from './tcinemas.component';

describe('TcinemasComponent', () => {
  let component: TcinemasComponent;
  let fixture: ComponentFixture<TcinemasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TcinemasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TcinemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
