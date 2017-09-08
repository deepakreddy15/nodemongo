import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesDataComponent } from './movies-data.component';

describe('MoviesDataComponent', () => {
  let component: MoviesDataComponent;
  let fixture: ComponentFixture<MoviesDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
