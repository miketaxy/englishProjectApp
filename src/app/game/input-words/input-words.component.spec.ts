import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputWordsComponent } from './input-words.component';

describe('InputWordsComponent', () => {
  let component: InputWordsComponent;
  let fixture: ComponentFixture<InputWordsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputWordsComponent]
    });
    fixture = TestBed.createComponent(InputWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
