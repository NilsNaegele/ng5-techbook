import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolymerPrincessComponent } from './polymer-princess.component';

describe('PolymerPrincessComponent', () => {
  let component: PolymerPrincessComponent;
  let fixture: ComponentFixture<PolymerPrincessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolymerPrincessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolymerPrincessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
