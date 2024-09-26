import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BlogListService } from './blog-list.service';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink, RouterLinkActive, RouterModule],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css',
  providers: [BlogListService],
})
export class BlogListComponent implements OnInit {
  public listBlog: any = [];
  public listImage: any = [];
  public date = new Date();
  public displayItems = [];
  public itemsToShow = 10;
  public currentIndex = 0;
  constructor(
    private blogList: BlogListService,
    private imageList: BlogListService
  ) {}
  ngOnInit(): void {
    this.blogList.getBlogList().subscribe((data) => {
      console.log(data);
      this.listBlog = data;
    });

    this.imageList.getImageList().subscribe((data) => {
      console.log(data);
      this.listImage = data;
    });
  }
}
