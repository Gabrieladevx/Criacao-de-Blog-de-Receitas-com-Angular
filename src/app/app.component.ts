import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Blog de Receitas';
  links = [
    { title: 'Receitas Doces', route: '/doces' },
    { title: 'Receitas Salgadas', route: '/salgadas' },
    { title: 'Dicas de Cozinha', route: '/dicas' },
    { title: 'Sobre o Blog', route: '/sobre' },
    { title: 'Contato', route: '/contato' },
  ];
}
