import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBlogEditComponent } from './form-blog-edit.component';

describe('FormBlogEditComponent', () => {
  let component: FormBlogEditComponent;
  let fixture: ComponentFixture<FormBlogEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormBlogEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormBlogEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
