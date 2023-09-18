import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimipiattiComponent } from './primipiatti.component';

describe('PrimipiattiComponent', () => {
  let component: PrimipiattiComponent;
  let fixture: ComponentFixture<PrimipiattiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrimipiattiComponent]
    });
    fixture = TestBed.createComponent(PrimipiattiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
