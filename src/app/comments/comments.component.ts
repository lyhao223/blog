import { Component, Input, OnInit } from '@angular/core';
import { CommentsService } from './comments.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css',
})
export class CommentsComponent implements OnInit {
  @Input() postId!: number;
  public comments: any = [];
  public filteredComments: any = [];
  constructor(private commentsService: CommentsService) {}

  ngOnInit(): void {
    this.commentsService.getCommentsForPost().subscribe((data) => {
      this.comments = data;

      this.filteredComments = this.comments.filter(
        (comment: { postId: number }) => comment.postId === this.postId
      );
    });
  }
}
