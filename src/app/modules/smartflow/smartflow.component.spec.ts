import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartflowComponent } from './smartflow.component';

describe('SmartflowComponent', () => {
  let component: SmartflowComponent;
  let fixture: ComponentFixture<SmartflowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartflowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
