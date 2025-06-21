import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { PostService } from './post.service';
import { Post } from './post.model';

@Component({
  selector: 'app-doces-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Receitas Doces</h2>
    <p class="descricao-categoria">{{ descricao }}</p>
    <div *ngFor="let post of posts" class="post-preview">
      <h3>{{ post.titulo }}</h3>
      <div class="conteudo">{{ post.conteudo }}</div>
    </div>
    <div *ngIf="posts.length === 0">Nenhuma receita doce encontrada.</div>
  `,
  styles: [`
    .post-preview { margin-bottom: 2rem; border-bottom: 1px solid #eee; padding-bottom: 1rem; }
    .categoria { font-size: 0.9em; color: #a0a; margin-right: 1em; }
    .descricao-categoria { font-size: 1.1em; color: #a00; margin-bottom: 1.5em; font-style: italic; }
  `]
})
export class DocesListComponent {
  posts: Post[] = [];
  descricao: string = '';
  constructor(private postService: PostService, private route: ActivatedRoute) {
    this.posts = this.postService.getPostsByCategoria('Doces');
    this.descricao = this.route.snapshot.data['descricao'] || '';
  }
}
