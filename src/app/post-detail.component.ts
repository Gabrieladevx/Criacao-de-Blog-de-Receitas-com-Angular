import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PostService } from './post.service';
import { Post } from './post.model';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-container *ngIf="post; else notFound">
      <h2>{{ post.titulo }}</h2>
      <p><em>{{ post.categoria }}</em></p>
      <div class="conteudo">{{ post.conteudo }}</div>
    </ng-container>
    <ng-template #notFound>
      <h2>Post não encontrado</h2>
    </ng-template>
  `,
  styles: [`
    .conteudo { margin-top: 1.5em; white-space: pre-line; color: #333; }
  `]
})
export class PostDetailComponent {
  post?: Post;
  constructor(route: ActivatedRoute, postService: PostService) {
    const id = Number(route.snapshot.paramMap.get('id'));
    this.post = postService.getPostById(id);
  }
}
