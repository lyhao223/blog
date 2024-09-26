import { Component, OnInit } from '@angular/core';
import IPost from '../model/post';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { FormCreatePostService } from './form-create-post.service';
@Component({
  selector: 'app-form-create-post',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-create-post.component.html',
  styleUrl: './form-create-post.component.css',
})
export class FormCreatePostComponent implements OnInit {
  dataPost: any[] = [];
  form: FormGroup | any;

  constructor(private f: FormBuilder, private post: FormCreatePostService) {}

  ngOnInit(): void {
    this.form = this.f.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(this.form.value);
    this.post.createPost(this.form.value).subscribe((data) => {
      console.log(data);

      this.dataPost.push(data);
      console.log(this.dataPost);
    });
  }
}
