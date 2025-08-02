import { Component } from '@angular/core';
import { ComponentService } from 'src/app/services/component.service';

@Component({
  selector: 'app-sidebar-nutri-grute-dietoterapia-clinica',
  standalone: true,
  imports: [],
  templateUrl: './sidebar-nutri-grute-dietoterapia-clinica.component.html',
  styleUrls: ['./sidebar-nutri-grute-dietoterapia-clinica.component.scss'], // Correção aqui
})
export class SidebarSistemasOperacionaisComponent {
  constructor(public componentService: ComponentService) {}

  onLinuxClick(event: Event) {
    event.preventDefault(); // Impede o recarregamento da página
    this.componentService.setCurrentComponent('T08So01Linux03Cmd01PwdComponent');
  }
}
