import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewPostComponent } from './new-post/new-post.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: 'api/login', component: UserComponent, pathMatch: 'full'},
  { path: 'api/new_post', component: NewPostComponent, pathMatch: 'full' },
  { path: 'api/posts', component: PostsComponent, pathMatch: 'full' },
  { path: 'api/posts/:post_id', component: PostComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
