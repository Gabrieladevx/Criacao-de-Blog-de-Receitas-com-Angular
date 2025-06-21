import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { PostListComponent } from './post-list.component';
import { PostDetailComponent } from './post-detail.component';
import { DocesListComponent } from './doces-list.component';
import { SalgadasListComponent } from './salgadas-list.component';
import { DicasListComponent } from './dicas-list.component';

@Component({
  standalone: true,
  template: `
    <h2>Sobre o Blog</h2>
    <p>Bem-vindo ao Blog de Receitas! Aqui você encontra receitas exclusivas, técnicas refinadas e dicas de chef para transformar sua cozinha em um verdadeiro ateliê gastronômico. Inspire-se com preparos detalhados, sabores autênticos e apresentações dignas de restaurante.</p>
  `
})
export class SobreComponent {}

export const routes: Routes = [
  { path: '', component: PostListComponent },
  { path: 'post/:id', component: PostDetailComponent },
  { path: 'doces', component: DocesListComponent, data: { descricao: 'Receitas doces sofisticadas, sobremesas criativas e técnicas de confeitaria para impressionar.' } },
  { path: 'salgadas', component: SalgadasListComponent, data: { descricao: 'Pratos salgados elaborados, entradas, massas e refeições completas para todas as ocasiões.' } },
  { path: 'dicas', component: DicasListComponent, data: { descricao: 'Dicas de cozinha, truques de chef e segredos para elevar o sabor e a apresentação dos seus pratos.' } },
  { path: 'sobre', component: SobreComponent },
];
