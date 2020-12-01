import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlistaUsComponent } from './llista-us.component';

describe('LlistaUsComponent', () => {
  let component: LlistaUsComponent;
  let fixture: ComponentFixture<LlistaUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LlistaUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LlistaUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
