import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmoviedataComponent } from './tmoviedata.component';

describe('TmoviedataComponent', () => {
  let component: TmoviedataComponent;
  let fixture: ComponentFixture<TmoviedataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmoviedataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmoviedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
