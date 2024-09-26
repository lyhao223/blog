import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogListService } from '../blog-list/blog-list.service';
import { BlogPostService } from './blog-post.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { CommentsComponent } from '../comments/comments.component';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf, CommentsComponent],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.css',
  providers: [BlogPostService, BlogListService, CommentsComponent],
})
export class BlogPostComponent implements OnInit {
  getId: any;
  data: any = [];
  imageList: any = [];
  constructor(
    private activeRoute: ActivatedRoute,
    private service: BlogPostService,
    private image: BlogListService
  ) {}

  ngOnInit(): void {
    this.getId = this.activeRoute.snapshot.paramMap.get('id');
    this.service.getPostWithID(this.getId).subscribe((data) => {
      console.log(data);
      this.data = data;
    });
    this.image.getImageList().subscribe((data) => {
      this.imageList = data;
    });
  }
}
