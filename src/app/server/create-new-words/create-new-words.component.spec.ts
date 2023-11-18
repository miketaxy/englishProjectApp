import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewWordsComponent } from './create-new-words.component';

describe('CreateNewWordsComponent', () => {
  let component: CreateNewWordsComponent;
  let fixture: ComponentFixture<CreateNewWordsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateNewWordsComponent]
    });
    fixture = TestBed.createComponent(CreateNewWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
