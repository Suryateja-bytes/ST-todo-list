import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamTablesComponent } from './sam-tables.component';

describe('SamTablesComponent', () => {
  let component: SamTablesComponent;
  let fixture: ComponentFixture<SamTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamTablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SamTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
