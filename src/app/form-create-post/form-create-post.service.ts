import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormCreatePostService {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  public createPost(post: any) {
    return this.http.post(`https://jsonplaceholder.typicode.com/posts`, post);
  }
}
