import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondipiattiComponent } from './secondipiatti.component';

describe('SecondipiattiComponent', () => {
  let component: SecondipiattiComponent;
  let fixture: ComponentFixture<SecondipiattiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondipiattiComponent]
    });
    fixture = TestBed.createComponent(SecondipiattiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
