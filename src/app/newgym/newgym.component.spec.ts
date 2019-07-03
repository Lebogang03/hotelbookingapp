import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewgymComponent } from './newgym.component';

describe('NewgymComponent', () => {
  let component: NewgymComponent;
  let fixture: ComponentFixture<NewgymComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewgymComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewgymComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
