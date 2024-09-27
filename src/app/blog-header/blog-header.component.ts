import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-blog-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './blog-header.component.html',
  styleUrl: './blog-header.component.css',
})
export class BlogHeaderComponent {}
