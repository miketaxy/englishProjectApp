import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWordsComponent } from './edit-words.component';

describe('EditWordsComponent', () => {
  let component: EditWordsComponent;
  let fixture: ComponentFixture<EditWordsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditWordsComponent]
    });
    fixture = TestBed.createComponent(EditWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
