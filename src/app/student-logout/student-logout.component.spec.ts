import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentLogoutComponent } from './student-logout.component';

describe('StudentLogoutComponent', () => {
  let component: StudentLogoutComponent;
  let fixture: ComponentFixture<StudentLogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentLogoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
