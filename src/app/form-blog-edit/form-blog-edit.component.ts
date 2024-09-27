import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormBlogEditService } from './form-blog-edit.service';

@Component({
  selector: 'app-form-blog-edit',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './form-blog-edit.component.html',
  styleUrl: './form-blog-edit.component.css',
})
export class FormBlogEditComponent {
  @Input() data: any;
  @Input() id: any;
  @Output() closeModal = new EventEmitter<void>();
  @Output() saveChanges = new EventEmitter<any>();

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private editService: FormBlogEditService
  ) {
    this.form = this.fb.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      body: ['', Validators.required],
    });
  }

  ngOnInit(): void {}
  ngOnChanges(): void {
    if (this.data) {
      this.form.patchValue({
        id: this.data.id,
        title: this.data.title,
        body: this.data.body,
      });
    }
  }

  onCancel() {
    this.closeModal.emit();
  }

  onSaveChanges() {
    this.editService
      .updatePost(this.data.id, this.form.value)
      .subscribe((data) => {
        console.log(data);
        console.log('Post updated successfully');
      });
    alert('Post updated successfully');
    this.closeModal.emit();
  }
}
