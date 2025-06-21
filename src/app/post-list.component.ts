import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from './post.service';
import { Post } from './post.model';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Últimas Receitas</h2>
    <div *ngFor="let post of posts" class="post-preview">
      <span class="categoria">{{ post.categoria }}</span>
      <h3>{{ post.titulo }}</h3>
      <div class="conteudo">{{ post.conteudo }}</div>
    </div>
  `,
  styles: [`
    .post-preview { margin-bottom: 2.5rem; border-bottom: 1px solid #eee; padding-bottom: 2rem; }
    .categoria { font-size: 0.95em; color: #a00; margin-top: 0.5em; }
    .conteudo { margin-top: 1em; white-space: pre-line; color: #333; }
  `]
})
export class PostListComponent {
  posts: Post[] = [];
  constructor(private postService: PostService) {
    this.posts = this.postService.getPosts();
  }
}
