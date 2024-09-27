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
  public paginatedBlogs: any[] = [];
  public currentPage = 1;
  public itemsPerPage = 10;
  public totalPages = 0;
  constructor(
    private blogList: BlogListService,
    private imageList: BlogListService
  ) {}
  ngOnInit(): void {
    this.blogList.getBlogList().subscribe((data) => {
      console.log(data);
      this.listBlog = data;
      this.totalPages = Math.ceil(this.listBlog.length / this.itemsPerPage);
      this.paginatedBlog();
    });

    this.imageList.getImageList().subscribe((data) => {
      console.log(data);
      this.listImage = data;
    });
  }

  paginatedBlog(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = this.currentPage * this.itemsPerPage;
    this.paginatedBlogs = this.listBlog.slice(startIndex, endIndex);
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.paginatedBlog();
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.paginatedBlog();
    }
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.paginatedBlog();
    }
  }
}
