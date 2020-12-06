import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFireTestingComponent } from './ngx-fire-testing.component';

describe('NgxFireTestingComponent', () => {
  let component: NgxFireTestingComponent;
  let fixture: ComponentFixture<NgxFireTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxFireTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxFireTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
