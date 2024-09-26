import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BlogPostService {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  public getPostWithID(id: number) {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
}
