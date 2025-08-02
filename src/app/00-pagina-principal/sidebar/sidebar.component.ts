import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ComponentService } from '../../services/component.service'; // Importe o serviço

import { SidebarTrilhaSugeridaComponent } from './sidebar-trilha-sugerida/sidebar-trilha-sugerida.component';
import { SidebarPublicacoesRecentesComponent } from './sidebar-publicacoes-recentes/sidebar-publicacoes-recentes.component';
import { SidebarNutriGruteBasesBiomedicasComponent } from './sidebar-nutri-grute-bases-biomedicas/sidebar-nutri-grute-bases-biomedicas.component';
import { SidebarNutriGruteMicrobiologiaHigieneComponent } from './sidebar-nutri-grute-microbiologia-higiene/sidebar-nutri-grute-microbiologia-higiene.component';
import { SidebarNutriGruteAlimentosTecnologiaComponent } from './sidebar-nutri-grute-alimentos-tecnologia/sidebar-nutri-grute-alimentos-tecnologia.component';
import { SidebarHardwareComponent } from './sidebar-nutri-grute-nutricao-dietetica/sidebar-nutri-grute-nutricao-dietetica.component';
import { SidebarLinguagensComponent } from './sidebar-nutri-grute-avaliacao-nutricional/sidebar-nutri-grute-avaliacao-nutricional.component';
import { SidebarSistemasOperacionaisComponent } from './sidebar-nutri-grute-dietoterapia-clinica/sidebar-nutri-grute-dietoterapia-clinica.component';
import { SidebarPrototiposComponent } from "./sidebar-nutri-grute-psicologia-relacoes/sidebar-nutri-grute-psicologia-relacoes.component";
import { SidebarNutriGruteComplementaresHumanisticasComponent } from "./sidebar-nutri-grute-complementares-humanisticas/sidebar-nutri-grute-complementares-humanisticas.component";
import { SidebarNutriGruteEstagiosTccComponent } from "./sidebar-nutri-grute-estagios-tcc/sidebar-nutri-grute-estagios-tcc.component";
import { SidebarNutriGruteGestaoAdministracaoComponent } from "./sidebar-nutri-grute-gestao-administracao/sidebar-nutri-grute-gestao-administracao.component";
import { SidebarNutriGruteMetodologiaPesquisaComponent } from "./sidebar-nutri-grute-metodologia-pesquisa/sidebar-nutri-grute-metodologia-pesquisa.component";
import { SidebarNutriGruteSaudeColetivaComponent } from "./sidebar-nutri-grute-saude-coletiva/sidebar-nutri-grute-saude-coletiva.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SidebarTrilhaSugeridaComponent,
    SidebarPublicacoesRecentesComponent,
    SidebarNutriGruteBasesBiomedicasComponent,
    SidebarNutriGruteMicrobiologiaHigieneComponent,
    SidebarNutriGruteAlimentosTecnologiaComponent,
    SidebarHardwareComponent,
    SidebarLinguagensComponent,
    SidebarSistemasOperacionaisComponent,
    SidebarPrototiposComponent,
    SidebarNutriGruteComplementaresHumanisticasComponent,
    SidebarNutriGruteEstagiosTccComponent,
    SidebarNutriGruteGestaoAdministracaoComponent,
    SidebarNutriGruteMetodologiaPesquisaComponent,
    SidebarNutriGruteSaudeColetivaComponent
],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  // providers: [ComponentService], // Adicione o serviço como provedor, caso não esteja em outro escopo global
})
export class SidebarComponent {

  constructor(public componentService: ComponentService) {}

  switchToLinux() {
    this.componentService.setCurrentComponent('T08So01Linux03Cmd01PwdComponent');
  }

}
