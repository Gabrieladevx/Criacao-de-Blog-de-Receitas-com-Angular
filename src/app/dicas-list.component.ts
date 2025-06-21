import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from './post.service';
import { Post } from './post.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dicas-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Dicas de Cozinha</h2>
    <p class="descricao-categoria">{{ descricao }}</p>
    <div *ngFor="let post of posts" class="post-preview">
      <h3>{{ post.titulo }}</h3>
      <div class="conteudo">{{ post.conteudo }}</div>
    </div>
    <div *ngIf="posts.length === 0">Nenhuma dica encontrada.</div>
  `,
  styles: [`
    .post-preview { margin-bottom: 2rem; border-bottom: 1px solid #eee; padding-bottom: 1rem; }
    .categoria { font-size: 0.9em; color: #a0a; margin-right: 1em; }
    .descricao-categoria { font-size: 1.1em; color: #a00; margin-bottom: 1.5em; font-style: italic; }
  `]
})
export class DicasListComponent {
  posts: Post[] = [];
  descricao: string = '';
  constructor(private postService: PostService, private route: ActivatedRoute) {
    this.posts = this.postService.getPostsByCategoria('Dicas');
    this.descricao = this.route.snapshot.data['descricao'] || '';
  }
}
