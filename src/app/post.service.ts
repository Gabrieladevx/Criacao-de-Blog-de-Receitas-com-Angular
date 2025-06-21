import { Injectable } from '@angular/core';
import { Post } from './post.model';

@Injectable({ providedIn: 'root' })
export class PostService {
  private posts: Post[] = [
    {
      id: 1,
      titulo: 'Bolo de Cenoura Fofinho',
      resumo: 'Aprenda a fazer um bolo de cenoura delicioso e fofinho.',
      conteudo: `Ingredientes:
- 3 cenouras médias picadas
- 4 ovos
- 1 xícara de óleo
- 2 xícaras de açúcar
- 2 e 1/2 xícaras de farinha de trigo
- 1 colher (sopa) de fermento em pó

Modo de preparo:
1. Bata no liquidificador as cenouras, ovos e óleo até ficar homogêneo.
2. Em uma tigela, misture o açúcar, a farinha e o fermento.
3. Adicione a mistura do liquidificador e mexa bem.
4. Despeje em forma untada e asse em forno pré-aquecido a 180°C por 40 minutos.
5. Espere esfriar e sirva com cobertura de chocolate, se desejar.`,
      categoria: 'Doces'
    },
    {
      id: 2,
      titulo: 'Lasanha de Frango Cremosa',
      resumo: 'Receita fácil e deliciosa de lasanha de frango para o almoço.',
      conteudo: `Ingredientes:
- 500g de massa para lasanha
- 2 peitos de frango cozidos e desfiados
- 1 cebola picada
- 2 dentes de alho picados
- 2 xícaras de molho de tomate
- 1 xícara de requeijão cremoso
- 300g de queijo muçarela fatiado
- 200g de presunto fatiado
- Sal, pimenta e cheiro-verde a gosto

Modo de preparo:
1. Refogue a cebola e o alho, acrescente o frango, o molho de tomate e tempere.
2. Monte camadas de massa, frango, presunto, queijo e requeijão.
3. Finalize com queijo e leve ao forno a 200°C por 30 minutos.`,
      categoria: 'Salgadas'
    },
    {
      id: 3,
      titulo: 'Pudim de Leite Condensado',
      resumo: 'O clássico pudim de leite condensado, cremoso e fácil.',
      conteudo: `Ingredientes:
- 1 lata de leite condensado
- 2 latas de leite (use a lata do condensado)
- 3 ovos
- 1 xícara de açúcar (para a calda)

Modo de preparo:
1. Derreta o açúcar em uma forma de pudim até virar caramelo.
2. Bata no liquidificador o leite condensado, leite e ovos.
3. Despeje na forma caramelizada e asse em banho-maria a 180°C por 1h30.
4. Espere esfriar, desenforme e sirva gelado.`,
      categoria: 'Doces'
    },
    {
      id: 4,
      titulo: 'Quiche de Alho-Poró',
      resumo: 'Uma quiche leve e saborosa para qualquer ocasião.',
      conteudo: `Ingredientes:
- 1 massa pronta para quiche ou torta
- 2 talos de alho-poró fatiados
- 3 ovos
- 1 caixinha de creme de leite
- 150g de queijo muçarela ralado
- Sal, pimenta e noz-moscada a gosto

Modo de preparo:
1. Refogue o alho-poró até murchar.
2. Misture ovos, creme de leite, queijo e temperos.
3. Forre a forma com a massa, coloque o alho-poró e cubra com o creme.
4. Asse a 200°C por 35 minutos ou até dourar.`,
      categoria: 'Salgadas'
    },
    {
      id: 5,
      titulo: 'Dica: Como Desfiar Frango Rápido',
      resumo: 'Aprenda uma técnica simples para desfiar frango em segundos.',
      conteudo: `Cozinhe o frango na panela de pressão, escorra e, ainda quente, bata na batedeira por 1 minuto. O frango ficará desfiado de forma uniforme e rápida.`,
      categoria: 'Dicas'
    },
    {
      id: 6,
      titulo: 'Dica: Como Deixar o Bolo Mais Fofo',
      resumo: 'Segredos para um bolo super fofo e macio.',
      conteudo: `Use ovos em temperatura ambiente, peneire os ingredientes secos e não bata demais a massa após adicionar a farinha. Isso garante um bolo mais leve e aerado.`,
      categoria: 'Dicas'
    }
  ];

  getPosts(): Post[] {
    return this.posts;
  }

  getPostById(id: number): Post | undefined {
    return this.posts.find(p => p.id === id);
  }

  addPost(post: Post) {
    this.posts.push(post);
  }

  getPostsByCategoria(categoria: string): Post[] {
    return this.posts.filter(p => p.categoria.toLowerCase() === categoria.toLowerCase());
  }
}
