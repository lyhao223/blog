import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormBlogEditService {
  constructor(private http: HttpClient) {}

  public updatePost(id: any, body: any) {
    return this.http.put(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      body
    );
  }
}
