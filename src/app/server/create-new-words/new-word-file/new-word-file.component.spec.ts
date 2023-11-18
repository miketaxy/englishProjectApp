import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewWordFileComponent } from './new-word-file.component';

describe('NewWordFileComponent', () => {
  let component: NewWordFileComponent;
  let fixture: ComponentFixture<NewWordFileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewWordFileComponent]
    });
    fixture = TestBed.createComponent(NewWordFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
