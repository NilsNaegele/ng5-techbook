import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeSearchBoxComponent } from './youtube-search-box.component';

describe('YoutubeSearchBoxComponent', () => {
  let component: YoutubeSearchBoxComponent;
  let fixture: ComponentFixture<YoutubeSearchBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubeSearchBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeSearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
