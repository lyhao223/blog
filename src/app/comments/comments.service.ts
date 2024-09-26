import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  constructor(private http: HttpClient) {}

  OnInit(): void {
    this.getCommentsForPost();
  }

  public getCommentsForPost() {
    return this.http.get(`https://jsonplaceholder.typicode.com/comments`);
  }
}
