import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessLibComponent } from './process-lib.component';

describe('ProcessLibComponent', () => {
  let component: ProcessLibComponent;
  let fixture: ComponentFixture<ProcessLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
