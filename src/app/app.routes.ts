import { Routes } from '@angular/router';
import { BlogListComponent } from './blog-list/blog-list.component';
import { FormCreatePostComponent } from './form-create-post/form-create-post.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { WelcomeComponent } from './welcome/welcome.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Welcome',
    component: WelcomeComponent,
  },
  {
    path: 'blog-list',
    title: 'Blog list',
    component: BlogListComponent,
  },
  {
    path: 'create-the-blog',
    title: 'Create the blog',
    component: FormCreatePostComponent,
  },
  {
    path: 'blog-list/post/:id',
    title: 'Blog detail',
    component: BlogPostComponent,
  },
];
