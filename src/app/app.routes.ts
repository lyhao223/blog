import { Routes } from '@angular/router';
import { BlogListComponent } from './blog-list/blog-list.component';
import { FormCreatePostComponent } from './form-create-post/form-create-post.component';
import { AlbumComponent } from './album/album.component';

export const routes: Routes = [
  { path: 'blog-list', title: 'Blog list', component: BlogListComponent },
  {
    path: 'create-the-blog',
    title: 'Create the blog',
    component: FormCreatePostComponent,
  },
  { path: 'album', title: 'Album', component: AlbumComponent },
];
