import { Component, NgModule, OnInit, TemplateRef } from '@angular/core';
import IPost from '../model/post';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { FormCreatePostService } from './form-create-post.service';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-form-create-post',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './form-create-post.component.html',
  styleUrl: './form-create-post.component.css',
})
export class FormCreatePostComponent implements OnInit {
  dataPost: any[] = [];
  form: FormGroup | any;
  isDone: boolean = false;
  content: any = '';
  constructor(private f: FormBuilder, private post: FormCreatePostService) {}

  ngOnInit(): void {
    this.form = this.f.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      body: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      return alert('Please fill in the form');
    }
    this.post.createPost(this.form.value).subscribe((data) => {
      this.dataPost.push(data);
      console.log(this.dataPost);
      this.isDone = true;
    });
  }
}
