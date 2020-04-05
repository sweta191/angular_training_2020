import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidResultComponent } from './covid-result.component';

describe('CovidResultComponent', () => {
  let component: CovidResultComponent;
  let fixture: ComponentFixture<CovidResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
