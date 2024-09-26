import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class BlogListService {
  public getJsonValue: any;
  public postJsonValue: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getBlogList();
    this.getImageList();
  }

  public getBlogList() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  public getImageList() {
    return this.http.get('https://jsonplaceholder.typicode.com/photos');
  }
}
