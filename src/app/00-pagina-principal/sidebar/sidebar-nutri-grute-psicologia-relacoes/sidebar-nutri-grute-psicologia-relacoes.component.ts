import { Component } from '@angular/core';
import { ComponentService } from 'src/app/services/component.service';

@Component({
  selector: 'app-sidebar-nutri-grute-psicologia-relacoes',
  standalone: true,
  imports: [],
  templateUrl: './sidebar-nutri-grute-psicologia-relacoes.component.html',
  styleUrl: './sidebar-nutri-grute-psicologia-relacoes.component.scss'
})
export class SidebarPrototiposComponent {
  constructor(public componentService: ComponentService) {}

  onLinuxClick(event: Event) {
    event.preventDefault(); // Impede o recarregamento da página
    this.componentService.setCurrentComponent('PrototipoBotoesRotasComponent');
  }
}
