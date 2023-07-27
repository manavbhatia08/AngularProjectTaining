import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseDetails } from '../coursedata.service';
import { CoursepageComponent } from './coursepage.component';

describe('CoursepageComponent', () => {
  let component: CoursepageComponent;
  let fixture: ComponentFixture<CoursepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursepageComponent],
    });
    fixture = TestBed.createComponent(CoursepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
