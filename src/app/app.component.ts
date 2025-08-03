import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './00-pagina-principal/sidebar/sidebar.component';
import { CabecalhoComponent } from './00-pagina-principal/cabecalho/cabecalho.component';
import { ArtigoComponent } from './sections/artigo/artigo.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    // SidebarComponent,
    // CabecalhoComponent,
    // ArtigoComponent,
    RouterModule // para o uso do <router-outlet>
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'graduanutri-angular';
}
