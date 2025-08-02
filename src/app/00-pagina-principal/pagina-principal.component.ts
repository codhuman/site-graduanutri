import { Component } from '@angular/core';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ArtigoComponent } from '../sections/artigo/artigo.component';
import { BannerComponent } from "./banner/banner.component";
import { PrototipoBotoesRotasComponent } from "../zz-prototipos/prototipo-botoes-rotas/prototipo-botoes-rotas.component";

@Component({
  selector: 'app-pagina-principal',
  standalone: true,
  imports: [SidebarComponent, ArtigoComponent, BannerComponent],  // Import SidebarComponent here if standalone
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.scss']
})
export class PaginainicialComponent {}
