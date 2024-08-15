import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewcarComponent } from './addnewcar.component';

describe('AddnewcarComponent', () => {
  let component: AddnewcarComponent;
  let fixture: ComponentFixture<AddnewcarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddnewcarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddnewcarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
