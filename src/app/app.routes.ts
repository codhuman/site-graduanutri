import { Routes } from '@angular/router';
import { PaginainicialComponent } from './00-pagina-principal/pagina-principal.component';
import { PublicacoesRecentesComponent } from './sections/02-pub-rec/publicacoes-recentes.component';
import { NutriGruteBasesBiomedicasComponent } from './sections/03-cc/nutri-grute-bases-biomedicas.component';

export const APP_ROUTES: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'pagina-inicial' },
  { path: '', component: PaginainicialComponent },
  { path: '', pathMatch: 'full', redirectTo: 'pagina-inicial' },
  { path: 'pagina-inicial', component: PaginainicialComponent },
  { path: 'publicacoes-recentes', component: PublicacoesRecentesComponent },
  { path: 'nutri-grute-bases-biomedicas', component: NutriGruteBasesBiomedicasComponent },
];
