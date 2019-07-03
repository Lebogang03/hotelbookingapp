import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpafacilitiesComponent } from './spafacilities.component';

describe('SpafacilitiesComponent', () => {
  let component: SpafacilitiesComponent;
  let fixture: ComponentFixture<SpafacilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpafacilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpafacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
