import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchHauseComponent } from './search-hause.component';

describe('SearchHauseComponent', () => {
  let component: SearchHauseComponent;
  let fixture: ComponentFixture<SearchHauseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchHauseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchHauseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
