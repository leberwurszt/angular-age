import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAgeComponent } from './show-age.component';

describe('ShowAgeComponent', () => {
  let component: ShowAgeComponent;
  let fixture: ComponentFixture<ShowAgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
